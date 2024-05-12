import type { Schema, Attribute } from '@strapi/strapi';

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
      'global-components.settings-json': GlobalComponentsSettingsJson;
      'global-components.slider-settings-json': GlobalComponentsSliderSettingsJson;
      'global-components.theme': GlobalComponentsTheme;
      'global-components.use-breakpoint': GlobalComponentsUseBreakpoint;
    }
  }
}
