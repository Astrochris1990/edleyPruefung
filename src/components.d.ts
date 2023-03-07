/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppDetail {
        "thispage": any;
    }
    interface AppModal {
        "url": string;
    }
    interface AppModalTwo {
        "url": string;
    }
    interface AppRoot {
    }
    interface AppTabs {
    }
    interface LogActiv {
    }
    interface PageHome {
    }
    interface PageLedger {
    }
    interface PageNotice {
    }
    interface PageProfile {
        "name": string;
    }
}
export interface AppModalCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAppModalElement;
}
export interface AppModalTwoCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAppModalTwoElement;
}
export interface LogActivCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLLogActivElement;
}
declare global {
    interface HTMLAppDetailElement extends Components.AppDetail, HTMLStencilElement {
    }
    var HTMLAppDetailElement: {
        prototype: HTMLAppDetailElement;
        new (): HTMLAppDetailElement;
    };
    interface HTMLAppModalElement extends Components.AppModal, HTMLStencilElement {
    }
    var HTMLAppModalElement: {
        prototype: HTMLAppModalElement;
        new (): HTMLAppModalElement;
    };
    interface HTMLAppModalTwoElement extends Components.AppModalTwo, HTMLStencilElement {
    }
    var HTMLAppModalTwoElement: {
        prototype: HTMLAppModalTwoElement;
        new (): HTMLAppModalTwoElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAppTabsElement extends Components.AppTabs, HTMLStencilElement {
    }
    var HTMLAppTabsElement: {
        prototype: HTMLAppTabsElement;
        new (): HTMLAppTabsElement;
    };
    interface HTMLLogActivElement extends Components.LogActiv, HTMLStencilElement {
    }
    var HTMLLogActivElement: {
        prototype: HTMLLogActivElement;
        new (): HTMLLogActivElement;
    };
    interface HTMLPageHomeElement extends Components.PageHome, HTMLStencilElement {
    }
    var HTMLPageHomeElement: {
        prototype: HTMLPageHomeElement;
        new (): HTMLPageHomeElement;
    };
    interface HTMLPageLedgerElement extends Components.PageLedger, HTMLStencilElement {
    }
    var HTMLPageLedgerElement: {
        prototype: HTMLPageLedgerElement;
        new (): HTMLPageLedgerElement;
    };
    interface HTMLPageNoticeElement extends Components.PageNotice, HTMLStencilElement {
    }
    var HTMLPageNoticeElement: {
        prototype: HTMLPageNoticeElement;
        new (): HTMLPageNoticeElement;
    };
    interface HTMLPageProfileElement extends Components.PageProfile, HTMLStencilElement {
    }
    var HTMLPageProfileElement: {
        prototype: HTMLPageProfileElement;
        new (): HTMLPageProfileElement;
    };
    interface HTMLElementTagNameMap {
        "app-detail": HTMLAppDetailElement;
        "app-modal": HTMLAppModalElement;
        "app-modal-two": HTMLAppModalTwoElement;
        "app-root": HTMLAppRootElement;
        "app-tabs": HTMLAppTabsElement;
        "log-activ": HTMLLogActivElement;
        "page-home": HTMLPageHomeElement;
        "page-ledger": HTMLPageLedgerElement;
        "page-notice": HTMLPageNoticeElement;
        "page-profile": HTMLPageProfileElement;
    }
}
declare namespace LocalJSX {
    interface AppDetail {
        "thispage"?: any;
    }
    interface AppModal {
        "onReportSubmitted"?: (event: AppModalCustomEvent<{ date: string | string[] }>) => void;
        "url"?: string;
    }
    interface AppModalTwo {
        "onReportSubmittedTwo"?: (event: AppModalTwoCustomEvent<{ datetwo: string | string[] }>) => void;
        "url"?: string;
    }
    interface AppRoot {
    }
    interface AppTabs {
    }
    interface LogActiv {
        "onFormOneSubmit"?: (event: LogActivCustomEvent<{ name: string; dateone: string; datetwo: string }>) => void;
        "onSubmitClicked"?: (event: LogActivCustomEvent<{ archive: number }>) => void;
    }
    interface PageHome {
    }
    interface PageLedger {
    }
    interface PageNotice {
    }
    interface PageProfile {
        "name"?: string;
    }
    interface IntrinsicElements {
        "app-detail": AppDetail;
        "app-modal": AppModal;
        "app-modal-two": AppModalTwo;
        "app-root": AppRoot;
        "app-tabs": AppTabs;
        "log-activ": LogActiv;
        "page-home": PageHome;
        "page-ledger": PageLedger;
        "page-notice": PageNotice;
        "page-profile": PageProfile;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-detail": LocalJSX.AppDetail & JSXBase.HTMLAttributes<HTMLAppDetailElement>;
            "app-modal": LocalJSX.AppModal & JSXBase.HTMLAttributes<HTMLAppModalElement>;
            "app-modal-two": LocalJSX.AppModalTwo & JSXBase.HTMLAttributes<HTMLAppModalTwoElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "app-tabs": LocalJSX.AppTabs & JSXBase.HTMLAttributes<HTMLAppTabsElement>;
            "log-activ": LocalJSX.LogActiv & JSXBase.HTMLAttributes<HTMLLogActivElement>;
            "page-home": LocalJSX.PageHome & JSXBase.HTMLAttributes<HTMLPageHomeElement>;
            "page-ledger": LocalJSX.PageLedger & JSXBase.HTMLAttributes<HTMLPageLedgerElement>;
            "page-notice": LocalJSX.PageNotice & JSXBase.HTMLAttributes<HTMLPageNoticeElement>;
            "page-profile": LocalJSX.PageProfile & JSXBase.HTMLAttributes<HTMLPageProfileElement>;
        }
    }
}
