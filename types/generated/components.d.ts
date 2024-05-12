import type { Schema, Attribute } from '@strapi/strapi';

export interface ButtonsApartAnonymousActionButton extends Schema.Component {
  collectionName: 'cmp_apart_anon_action_buttons';
  info: {
    displayName: 'Apartment Anonymous Action Button';
  };
  attributes: {
    isMuiIconButton: Attribute.Boolean & Attribute.DefaultTo<false>;
    muiIconButtonIcon: Attribute.Media;
    muiButtonText: Attribute.String;
    muiButtonStartIcon: Attribute.Media;
    muiButtonEndIcon: Attribute.Media;
    muiButtonAction: Attribute.Enumeration<['openLink', 'openInfoPage']> &
      Attribute.Required &
      Attribute.DefaultTo<'openLink'>;
    muiButtonLink: Attribute.String;
    settings: Attribute.Component<'global-components.settings-json'>;
    componentGridItemSettings: Attribute.Component<'global-components.settings-json'>;
    useBreakpoint: Attribute.Component<'global-components.use-breakpoint'> &
      Attribute.Required;
  };
}

export interface ButtonsApartAuthenticatedActionButton
  extends Schema.Component {
  collectionName: 'cmp_apart_auth_action_buttons';
  info: {
    displayName: 'Apartment Authenticated Action Button';
    description: '';
  };
  attributes: {
    isMuiIconButton: Attribute.Boolean & Attribute.DefaultTo<false>;
    muiIconButtonIcon: Attribute.Media;
    muiButtonText: Attribute.String;
    muiButtonStartIcon: Attribute.Media;
    muiButtonEndIcon: Attribute.Media;
    muiButtonAction: Attribute.Enumeration<
      ['openInfoPage', 'book', 'toggleFavorite', 'openLink']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'openLink'>;
    muiButtonLink: Attribute.String;
    settings: Attribute.Component<'global-components.settings-json'>;
    componentGridItemSettings: Attribute.Component<'global-components.settings-json'>;
    useBreakpoint: Attribute.Component<'global-components.use-breakpoint'> &
      Attribute.Required;
    muiIconButtonIconActive: Attribute.Media;
    muiButtonStartIconActive: Attribute.Media;
    muiButtonTextActive: Attribute.String;
    muiButtonEndIconActive: Attribute.Media;
  };
}

export interface ButtonsBannerAnonymousActionButton extends Schema.Component {
  collectionName: 'cmp_banner_anon_action_buttons';
  info: {
    displayName: 'Banner Anonymous Action Button';
  };
  attributes: {
    isMuiIconButton: Attribute.Boolean & Attribute.DefaultTo<false>;
    muiIconButtonIcon: Attribute.Media;
    muiButtonText: Attribute.String;
    muiButtonStartIcon: Attribute.Media;
    muiButtonEndIcon: Attribute.Media;
    muiButtonAction: Attribute.Enumeration<
      ['openTermsAndConditionsPopover', 'openLink']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'openLink'>;
    muiButtonLink: Attribute.String;
    settings: Attribute.Component<'global-components.settings-json'>;
    componentGridItemSettings: Attribute.Component<'global-components.settings-json'>;
    useBreakpoint: Attribute.Component<'global-components.use-breakpoint'> &
      Attribute.Required;
  };
}

export interface ButtonsBannerAuthenticatedActionButton
  extends Schema.Component {
  collectionName: 'cmp_banner_auth_action_buttons';
  info: {
    displayName: 'Banner Authenticated Action Button';
  };
  attributes: {
    isMuiIconButton: Attribute.Boolean & Attribute.DefaultTo<false>;
    muiIconButtonIcon: Attribute.Media;
    muiButtonText: Attribute.String;
    muiButtonStartIcon: Attribute.Media;
    muiButtonEndIcon: Attribute.Media;
    muiButtonAction: Attribute.Enumeration<
      ['openTermsAndConditionsPopover', 'openLink']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'openLink'>;
    muiButtonLink: Attribute.String;
    settings: Attribute.Component<'global-components.settings-json'>;
    componentGridItemSettings: Attribute.Component<'global-components.settings-json'>;
    useBreakpoint: Attribute.Component<'global-components.use-breakpoint'> &
      Attribute.Required;
  };
}

export interface ButtonsGlobalAnonymousActionButton extends Schema.Component {
  collectionName: 'cmp_global_anon_action_buttons';
  info: {
    displayName: 'Global Anonymous Action Button';
  };
  attributes: {
    isMuiIconButton: Attribute.Boolean & Attribute.DefaultTo<false>;
    muiIconButtonIcon: Attribute.Media;
    muiButtonText: Attribute.String;
    muiButtonStartIcon: Attribute.Media;
    muiButtonEndIcon: Attribute.Media;
    muiButtonAction: Attribute.Enumeration<
      ['openSidebar', 'closeSidebar', 'openLink', 'replaceLink']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'openLink'>;
    muiButtonLink: Attribute.String;
    settings: Attribute.Component<'global-components.settings-json'>;
    componentGridItemSettings: Attribute.Component<'global-components.settings-json'>;
    useBreakpoint: Attribute.Component<'global-components.use-breakpoint'> &
      Attribute.Required;
  };
}

export interface ButtonsGlobalAuthenticatedActionButton
  extends Schema.Component {
  collectionName: 'cmp_global_auth_action_buttons';
  info: {
    displayName: 'Global Authenticated Action Button';
  };
  attributes: {
    isMuiIconButton: Attribute.Boolean & Attribute.DefaultTo<false>;
    muiIconButtonIcon: Attribute.Media;
    muiButtonText: Attribute.String;
    muiButtonStartIcon: Attribute.Media;
    muiButtonEndIcon: Attribute.Media;
    muiButtonAction: Attribute.Enumeration<
      ['openSidebar', 'closeSidebar', 'logout', 'openLink']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'openLink'>;
    muiButtonLink: Attribute.String;
    settings: Attribute.Component<'global-components.settings-json'>;
    componentGridItemSettings: Attribute.Component<'global-components.settings-json'>;
    useBreakpoint: Attribute.Component<'global-components.use-breakpoint'> &
      Attribute.Required;
  };
}

export interface ButtonsGlobalGenericActionButton extends Schema.Component {
  collectionName: 'cmp_global_generic_action_buttons';
  info: {
    displayName: 'Global Generic Action Button';
  };
  attributes: {
    isMuiIconButton: Attribute.Boolean & Attribute.DefaultTo<false>;
    muiIconButtonIcon: Attribute.Media;
    muiButtonText: Attribute.String;
    muiButtonStartIcon: Attribute.Media;
    muiButtonEndIcon: Attribute.Media;
    muiButtonAction: Attribute.Enumeration<
      ['openSidebar', 'closeSidebar', 'openLink']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'openLink'>;
    muiButtonLink: Attribute.String;
    settings: Attribute.Component<'global-components.settings-json'>;
    componentGridItemSettings: Attribute.Component<'global-components.settings-json'>;
    useBreakpoint: Attribute.Component<'global-components.use-breakpoint'> &
      Attribute.Required;
  };
}

export interface ButtonsSpecialtyButton extends Schema.Component {
  collectionName: 'cmp_specialty_buttons';
  info: {
    displayName: 'Specialty Button';
    icon: 'adjust';
  };
  attributes: {
    isMuiIconButton: Attribute.Boolean & Attribute.DefaultTo<false>;
    muiIconButtonIcon: Attribute.Media;
    muiButtonText: Attribute.String;
    muiButtonStartIcon: Attribute.Media;
    muiButtonEndIcon: Attribute.Media;
    settings: Attribute.Component<'global-components.settings-json'>;
  };
}

export interface ButtonsSpecialtyLinkButton extends Schema.Component {
  collectionName: 'cmp_specialty_link_buttons';
  info: {
    displayName: 'Specialty Link Button';
    icon: 'allergies';
  };
  attributes: {
    isMuiIconButton: Attribute.Boolean & Attribute.DefaultTo<false>;
    muiIconButtonIcon: Attribute.Media;
    muiButtonText: Attribute.String;
    muiButtonStartIcon: Attribute.Media;
    muiButtonEndIcon: Attribute.Media;
    muiButtonLink: Attribute.String & Attribute.Required;
    settings: Attribute.Component<'global-components.settings-json'>;
  };
}

export interface ButtonsSpecialtyStatefulButton extends Schema.Component {
  collectionName: 'cmp_specialty_stateful_buttons';
  info: {
    displayName: 'Specialty Stateful Button';
    description: '';
  };
  attributes: {
    isMuiIconButton: Attribute.Boolean & Attribute.DefaultTo<false>;
    muiIconButtonIcon: Attribute.Media;
    muiButtonText: Attribute.String;
    muiButtonStartIcon: Attribute.Media;
    muiButtonEndIcon: Attribute.Media;
    muiIconButtonIconActive: Attribute.Media;
    muiButtonTextActive: Attribute.String;
    muiButtonStartIconActive: Attribute.Media;
    muiButtonEndIconActive: Attribute.Media;
    settings: Attribute.Component<'global-components.settings-json'>;
    muiButtonUseActiveState: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface CountdownCountdown extends Schema.Component {
  collectionName: 'cmp_countdowns';
  info: {
    displayName: 'Countdown';
    description: '';
  };
  attributes: {
    useFlipAnimation: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    timerFormat: Attribute.Enumeration<
      ['dd  : hh : mm : ss', 'dd : hh : mm', 'dd : hh', 'dd']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'dd  : hh : mm : ss'>;
    timerDaysTitle: Attribute.String;
    timerHoursTitle: Attribute.String;
    timerMinutesTitle: Attribute.String;
    timerSecondsTitle: Attribute.String;
    targetDate: Attribute.DateTime & Attribute.Required;
    title: Attribute.String;
    settings: Attribute.Component<'global-components.settings-json'>;
  };
}

export interface GlobalComponentsSettingsJson extends Schema.Component {
  collectionName: 'cmp_settings_jsons';
  info: {
    displayName: 'Settings JSON';
    icon: 'align-center';
    description: '';
  };
  attributes: {
    defaultSettings: Attribute.JSON;
    customSettings: Attribute.JSON;
    useCustomSettings: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface GlobalComponentsSliderSettingsJson extends Schema.Component {
  collectionName: 'cmp_slider_settings_jsons';
  info: {
    displayName: 'Slider Settings JSON';
  };
  attributes: {
    defaultSettings: Attribute.JSON;
    customSettings: Attribute.JSON;
    useCustomSettings: Attribute.Boolean;
  };
}

export interface GlobalComponentsTheme extends Schema.Component {
  collectionName: 'cmp_themes';
  info: {
    displayName: 'Theme';
    icon: 'paint-brush';
  };
  attributes: {
    useCustomTheme: Attribute.Boolean & Attribute.DefaultTo<false>;
    defaultLightTheme: Attribute.JSON;
    defaultDarkTheme: Attribute.JSON;
    customLightTheme: Attribute.JSON;
    customDarkTheme: Attribute.JSON;
  };
}

export interface GlobalComponentsUseBreakpoint extends Schema.Component {
  collectionName: 'cmp_use_breakpoints';
  info: {
    displayName: 'Use Breakpoint';
  };
  attributes: {
    breakpoint: Attribute.Enumeration<
      [
        'xsUp',
        'smUp',
        'mdUp',
        'lgUp',
        'xlUp',
        'smDown',
        'mdDown',
        'lgDown',
        'xlDown'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'xsUp'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'buttons.apart-anonymous-action-button': ButtonsApartAnonymousActionButton;
      'buttons.apart-authenticated-action-button': ButtonsApartAuthenticatedActionButton;
      'buttons.banner-anonymous-action-button': ButtonsBannerAnonymousActionButton;
      'buttons.banner-authenticated-action-button': ButtonsBannerAuthenticatedActionButton;
      'buttons.global-anonymous-action-button': ButtonsGlobalAnonymousActionButton;
      'buttons.global-authenticated-action-button': ButtonsGlobalAuthenticatedActionButton;
      'buttons.global-generic-action-button': ButtonsGlobalGenericActionButton;
      'buttons.specialty-button': ButtonsSpecialtyButton;
      'buttons.specialty-link-button': ButtonsSpecialtyLinkButton;
      'buttons.specialty-stateful-button': ButtonsSpecialtyStatefulButton;
      'countdown.countdown': CountdownCountdown;
      'global-components.settings-json': GlobalComponentsSettingsJson;
      'global-components.slider-settings-json': GlobalComponentsSliderSettingsJson;
      'global-components.theme': GlobalComponentsTheme;
      'global-components.use-breakpoint': GlobalComponentsUseBreakpoint;
    }
  }
}
