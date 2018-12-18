import {observable} from 'mobx';
import cookie from 'react-cookies';
import Window from './components/window';
import Directory from './components/directory';
import Projects from './components/projects';
import WarningWindow from './components/warning_window';
import ResumeApp from './components/resume_app';

const ICONS_BASE_URL = '/images/icons/';
const ELEMENTS = {
    WINDOW: Window,
    DIRECTORY: Directory,
    PROJECTS: Projects,
    WARNING_WINDOW: WarningWindow,
    RESUME_APP: ResumeApp
};

const ICONS = {
    DEFAULT: ICONS_BASE_URL + 'app.png',
    SHUTDOWN: ICONS_BASE_URL + 'shutdown.png',
    DESKTOP: ICONS_BASE_URL + 'desktop.png',
    EXPLORER: ICONS_BASE_URL + 'explorer.png',
    EXPLORER_PAGE: ICONS_BASE_URL + 'explorer_page.png',
    DIRECTORY: ICONS_BASE_URL + 'directory.png',
    WORLD: ICONS_BASE_URL + 'world.png',
    WINDOWS_WORLD: ICONS_BASE_URL + 'windows_world.png'
};

const copyrightShown = cookie.load('copyright_shown') === 'true';
const cookieShown = cookie.load('cookie_shown') === 'true';

export const HEADER_BUTTON_OPTION = {
    FULLSCREEN: 'FULLSCREEN',
    COLLAPSE: 'COLLAPSE',
    CLOSE: 'CLOSE'
};

export const START_PRESET = {
    ALMOST_FULL: 'ALMOST_FULL'
};

const START_MENU_ITEMS = [
    {
        'img': ICONS.SHUTDOWN,
        'text': window.initialState.shutdownText,
        'line': 'top'
    }
];

const WINDOWS = [
    {
        'windowId': 'MY_PROJECTS',
        'title': window.initialState.projectsText,
        'element': ELEMENTS.PROJECTS,
        'img': ICONS.DIRECTORY,
        'hidden': true,
        'fullscreen': false,
        'collapsed': false,
        'top': 10,
        'left': 10,
        'width': '95%',
        'height': '95%',
        'resizable': true,
        'headerIcons': [HEADER_BUTTON_OPTION.COLLAPSE, HEADER_BUTTON_OPTION.CLOSE]
    },
    {
        'windowId': 'MY_RESUME',
        'element': ELEMENTS.RESUME_APP,
        'title': window.initialState.resumeText + '.html',
        'img': ICONS.EXPLORER_PAGE,
        'hidden': false,
        'fullscreen': false,
        'collapsed': false,
        'top': 10,
        'left': 10,
        'width': '95%',
        'height': '95%',
        'resizable': true,
        'headerIcons': [HEADER_BUTTON_OPTION.FULLSCREEN, HEADER_BUTTON_OPTION.COLLAPSE, HEADER_BUTTON_OPTION.CLOSE]
    },
    {
        'windowId': 'cookieWarning',
        'element': ELEMENTS.WARNING_WINDOW,
        'title': 'Cookies',
        'img': ICONS.WORLD,
        'hidden': cookieShown,
        'fullscreen': false,
        'collapsed': false,
        'top': 30,
        'left': 30,
        'width': 300,
        'height': 200,
        'headerIcons': [],
        'resizable': false,
        'desktopHidden': true,
        'cookieFlag': 'cookie_shown',
        'warningText': window.initialState.cookiesText
    },
    {
        'windowId': 'copyrightWarning',
        'element': ELEMENTS.WARNING_WINDOW,
        'title': 'Copyright',
        'img': ICONS.WINDOWS_WORLD,
        'hidden': copyrightShown,
        'fullscreen': false,
        'desktopHidden': true,
        'collapsed': false,
        'top': 10,
        'left': 10,
        'width': 300,
        'height': 200,
        'headerIcons': [],
        'cookieFlag': 'copyright_shown',
        'resizable': false,
        'warningText': window.initialState.copyrightText
    }
];

class Win98Store {
    @observable startMenuOpened;
    @observable activeWindowId;
    @observable desktopWidth;
    @observable desktopHeight;
    @observable desktopSelectedItems;
    @observable cookieAlertShown;
    @observable copyrightShown;
    @observable windows;
    startMenuItems;

    constructor() {
        this.startMenuOpened = false;
        this.activeWindowId = null;
        this.desktopWidth = null;
        this.desktopHeight = null;
        this.copyrightShown = cookie.load('copyrightShown');
        this.cookieAlertShown = cookie.load('cookieAlertShown');
        this.startMenuItems = START_MENU_ITEMS;
        this.desktopSelectedItems = [];
        this.windows = WINDOWS;
    }

    toggleStartMenu() {
        this.startMenuOpened = !this.startMenuOpened;
    }

    setWindowActive(windowId) {
        this.activeWindowId = windowId;
        this.hideStartMenu();
    }

    setDesktopSize(width, height) {
        this.desktopWidth = width;
        this.desktopHeight = height;
    }

    setDesktopSelected(windowId) {
        this.desktopSelectedItems = windowId === null ? [] : Array.isArray(windowId) ? windowId : [windowId]; // hotfix
    }

    _getWindow(windowId) {
        return this.windows[this.windows.findIndex((i) => i.windowId === windowId)]
    }

    showWindow(windowId) {
        this._getWindow(windowId).hidden = false;
        this.setWindowActive(windowId);
    }

    hideWindow(windowId) {
        const window = this._getWindow(windowId);
        window.hidden = true;
        window.fullscreen = false;
        this.setWindowActive(null);
    }

    setWindowFullscreen(windowId) {
        this._getWindow(windowId).fullscreen = true;
        this.setWindowActive(windowId);
    }

    setWindowDefault(windowId) {
        this._getWindow(windowId).fullscreen = false;
    }

    setWindowCollapsed(windowId, collapsed) {
        this._getWindow(windowId).collapsed = collapsed;
    }

    hideStartMenu() {
        this.startMenuOpened = false;
    }
}

export default new Win98Store();