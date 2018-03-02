import zh_CN from './zh_CN';
import en_US from './en_US';

type Language = {
    siders: {
        all: string;
        files: string;
        videos: string;
        music: string;
        about: string;
        settings: string;
    },

    buttons: {
        upload: string;
        newfolder: string;
        cancel: string;
        confirm: string;
        save: string;
        delete: string;
        rename: string;
        yes: string;
    },

    table: {
        name: string;
        actions: string;
        size: string;
    },

    placeholders: {
        folder: string;
        search: string;
        share: string;
        rename: string,
    },

    messages: {
        dragfiles: string;
        uploadingsucceeded: string;
        uploadingfailed: string;
        areyousure: string;
        copied: string;
    },

    tooltips: {
        share: string;
        rename: string;
        delete: string;
    }
}

export const langauges = {
    'zh_CN': zh_CN,
    'en_US': en_US,
};

export default langauges[window.navigator.language] as Language || en_US;
