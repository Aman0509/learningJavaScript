class DOMHelper {
	static clearEventListeners(element){
		const clonedElement = element.cloneNode(true);
		element.replaceWith(clonedElement);
		return clonedElement;
	}

	static moveElement(elementId, newDestinationSelector) {
		const element = document.getElementById(elementId);
		const destinationElement = document.querySelector(newDestinationSelector);
		destinationElement.append(element);
		element.scrollIntoView({behavior: 'smooth'});
	}
}

class Component {
	constructor(hostElementId, insertBefore=false) {
		if (hostElementId) {
			this.hostElement = document.getElementById(hostElementId);
		} else {
			this.hostElement = document.body;
		}
		this.insertBefore = insertBefore;
	}

	detach() {
		if (this.element) {
			this.element.remove();
			// this.element.parentElement.removeChild(this.element);
		}
	}

	attach() {
		this.hostElement.insertAdjacentElement(this.insertBefore ? 'afterbegin' : 'beforeend', this.element);
	}
}

class Tooltip extends Component {
	constructor(closeNotifierFunction, toolTipText, hostElementId) {
		super(hostElementId);
		this.closeNotifier = closeNotifierFunction;
		this.toolTipText = toolTipText;
		this.create();
	}

	closeToolTip = () => {
		this.detach();
		this.closeNotifier();
	};

	create() {
		const toolTipElement = document.createElement('div');
		toolTipElement.className = 'card';
		// toolTipElement.textContent = this.toolTipText;
		const tootTipTemplate = document.getElementById('tooltip');
		const tootTipBody = document.importNode(tootTipTemplate.content, true);
		tootTipBody.querySelector('p').textContent = this.toolTipText;
		toolTipElement.append(tootTipBody);

		const hostElementLeft = this.hostElement.offsetLeft;
		const hostElementTop = this.hostElement.offsetTop;
		const hostElementHeight = this.hostElement.offsetHeight;
		const parentElementScrolling = this.hostElement.parentElement.scrollTop;

		const x = hostElementLeft + 20;
		const y = hostElementTop + hostElementHeight - parentElementScrolling - 10;

		toolTipElement.style.position = 'absolute';
		toolTipElement.style.left = x + 'px';
		toolTipElement.style.top = y + 'px';

		toolTipElement.addEventListener('click', this.closeToolTip);
		this.element = toolTipElement;
	}
}

class ProjectItem {
    hasActiveTooltip = false;

	constructor(id, updateProjectListFunction, type) {
		this.id = id;
		this.updateProjectListHandler = updateProjectListFunction;
		this.connectMoreInfoButton();
		this.connectSwitchButton(type);
	}

	showMoreInfoHandler() {
		if (this.hasActiveTooltip) {
			return;
		}
		const projectElement = document.getElementById(this.id);
		const toolTipText = projectElement.dataset.extraInfo;
		const tooltip = new Tooltip(() => {
			this.hasActiveTooltip = false;
		}, toolTipText, this.id);
		tooltip.attach();
		this.hasActiveTooltip = true;
	}

	connectMoreInfoButton(){
		const prjItemElement = document.getElementById(this.id);
		const moreInfoBtn = prjItemElement.querySelector('button:first-of-type');
		moreInfoBtn.addEventListener('click', this.showMoreInfoHandler.bind(this));
	}

	connectSwitchButton(type) {
		const prjItemElement = document.getElementById(this.id);
		let switchBtn = prjItemElement.querySelector('button:last-of-type');
		switchBtn = DOMHelper.clearEventListeners(switchBtn);
		switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';
		switchBtn.addEventListener('click', this.updateProjectListHandler.bind(null, this.id));
	}

	update(updateProjectListFn, type) {
		this.updateProjectListHandler = updateProjectListFn;
		this.connectSwitchButton(type);
	}
}

class ProjectList {
	projects = [];

	constructor(type) {
		this.type = type;
		const prjItems = document.querySelectorAll(`#${type}-projects li`);
		for (const prjItem of prjItems) {
				this.projects.push(new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type));
		}
	}

	setSwitchHandlerFunction(switchHandlerFunction) {
		this.switchHandler = switchHandlerFunction;
	}

	addProject(project) {
		this.projects.push(project);
		DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
		project.update(this.switchProject.bind(this), this.type);
	}

	switchProject(projectId) {
		// adding project to another bucket
		this.switchHandler(this.projects.find(p => p.id === projectId));

		// remove project
		// One way to do it
		// const projectIndex = this.projects.findIndex(p => p.id === projectId);
		// this.projects.splice(projectIndex, 1);

		// Another way of removing the project
		this.projects = this.projects.filter(p => p.id !== projectId);
	}
}

class App {
	static init(){
		const activeProjectsList = new ProjectList('active');
		const finishedProjectsList = new ProjectList('finished');
		activeProjectsList.setSwitchHandlerFunction(finishedProjectsList.addProject.bind(finishedProjectsList));
		finishedProjectsList.setSwitchHandlerFunction(activeProjectsList.addProject.bind(activeProjectsList));

		/*
		This is an example of how JavaScript can execute code asynchronously via setTimeout() and setInterval(), a topic we haven't covered yet. When you set a timer in JavaScript, it won't pause the execution of your entire script. Instead, the browser registers the timer in the background and manages it, so your script can continue to run normally without interruption. When the timer expires, the browser will execute the registered function. It's important to understand that this process doesn't pause script execution, and the browser takes care of managing the timer in the background. This ensures that your script can continue to run without any pauses or disruptions.
		*/
		// document.getElementById('start-analytics').addEventListener('click', this.startAnalytics);
		const timerId = setTimeout(this.startAnalytics, 3000);

		// If you click on `Stop Analytics` button before 3 seconds, the action will not be happened
		document.getElementById('stop-analytics').addEventListener('click', () => {clearTimeout(timerId);})
	}

	// This is just a random function to demonstrate about adding a JS dynamically on some event
	static startAnalytics() {
		const analyticsScript = document.createElement('script');
		analyticsScript.src = 'assets/scripts/analytics.js';
		analyticsScript.defer = true;
		document.head.append(analyticsScript);
	}
}

App.init();