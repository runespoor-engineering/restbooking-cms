import type { Schema, Attribute } from '@strapi/strapi';

export interface ApartmentApartmentTitlePlaceholder extends Schema.Component {
  collectionName: 'cmp_apart_title_phs';
  info: {
    displayName: 'apartment Title Placeholder';
  };
  attributes: {
    settings: Attribute.Component<'global-components.settings-json'>;
    componentGridItemSettings: Attribute.Component<'global-components.settings-json'>;
    useBreakpoint: Attribute.Component<'global-components.use-breakpoint'> &
      Attribute.Required;
  };
}

export interface ApartmentsApartmentCategoryWrapper extends Schema.Component {
  collectionName: 'cmp_apartment_category_wrappers';
  info: {
    displayName: 'Apartment Category Wrapper';
    icon: 'clipboard-list';
    description: '';
  };
  attributes: {
    apartmentCategory: Attribute.Relation<
      'apartments.apartment-category-wrapper',
      'oneToOne',
      'api::apartment-category.apartment-category'
    >;
    technicalName: Attribute.String & Attribute.Required & Attribute.Private;
  };
}

export interface ApartmentsApartmentPlaceholder extends Schema.Component {
  collectionName: 'cmp_apartment_placeholders';
  info: {
    displayName: 'Apartment Placeholder';
    icon: 'indent';
    description: '';
  };
  attributes: {
    componentGridItemSettings: Attribute.Component<'global-components.settings-json'>;
    settings: Attribute.Component<'global-components.settings-json'>;
    coverImageAnonymousActionButtons: Attribute.Component<
      'buttons.apartment-anonymous-action-button',
      true
    >;
    coverImageActionButtonsGridContainerSettings: Attribute.Component<'global-components.settings-json'>;
    backButtonIcon: Attribute.Media;
    favoriteIcon: Attribute.Media;
    favoriteActiveIcon: Attribute.Media;
  };
}

export interface ApartmentsApartmentWrapper extends Schema.Component {
  collectionName: 'cmp_apartment_wrappers';
  info: {
    displayName: 'Apartment Wrapper';
    icon: 'play-circle';
  };
  attributes: {
    apartment: Attribute.Relation<
      'apartments.apartment-wrapper',
      'oneToOne',
      'api::apartment.apartment'
    >;
    technicalName: Attribute.String & Attribute.Required & Attribute.Private;
  };
}

export interface ApartmentsApartment extends Schema.Component {
  collectionName: 'cmp_apartments';
  info: {
    displayName: 'Apartment';
    icon: 'dice-six';
    description: '';
  };
  attributes: {
    componentGridItemSettings: Attribute.Component<'global-components.settings-json'>;
    apartment: Attribute.Relation<
      'apartments.apartment',
      'oneToOne',
      'api::apartment.apartment'
    >;
  };
}

export interface ApartmentsApartmentsCatalogSearch extends Schema.Component {
  collectionName: 'cmp_apartments_catalog_searches';
  info: {
    displayName: 'apartmentsCatalogSearch';
  };
  attributes: {
    anonymousRedirectLink: Attribute.String;
  };
}

export interface ApartmentsApartmentsCatalog extends Schema.Component {
  collectionName: 'cmp_apartments_catalogs';
  info: {
    displayName: 'Apartments Catalog';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    useLoadMore: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    componentGridItemSettings: Attribute.Component<'global-components.settings-json'>;
    title: Attribute.String;
    displayCategoryApartmentsCount: Attribute.Boolean &
      Attribute.DefaultTo<true>;
    categories: Attribute.Component<
      'apartments.apartment-category-wrapper',
      true
    >;
    defaultCategory: Attribute.Relation<
      'apartments.apartments-catalog',
      'oneToOne',
      'api::apartment-category.apartment-category'
    >;
    settings: Attribute.Component<'global-components.settings-json'>;
    useSorting: Attribute.Enumeration<
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
      Attribute.DefaultTo<'xsUp'>;
    useSearch: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    showMoreButton: Attribute.Component<'buttons.specialty-button'>;
    apartmentsCatalogSearch: Attribute.Component<'apartments.apartments-catalog-search'>;
  };
}

export interface ButtonsApartmentAnonymousActionButton
  extends Schema.Component {
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

export interface ButtonsApartmentAuthenticatedActionButton
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

export interface FaqFaqCatalogManual extends Schema.Component {
  collectionName: 'cmp_faq_catalog_manuals';
  info: {
    displayName: 'FAQ Catalog Manual';
  };
  attributes: {
    title: Attribute.String;
    faqs: Attribute.Component<'faq.faq-wrapper', true>;
    expandIcon: Attribute.Media;
    componentGridItemSettings: Attribute.Component<'global-components.settings-json'>;
    settings: Attribute.Component<'global-components.settings-json'>;
    useBreakpoint: Attribute.Component<'global-components.use-breakpoint'> &
      Attribute.Required;
    showMoreButton: Attribute.Component<'buttons.specialty-button'>;
  };
}

export interface FaqFaqCatalog extends Schema.Component {
  collectionName: 'cmp_faq_catalogs';
  info: {
    displayName: 'FAQ Catalog';
    icon: 'question-circle';
    description: '';
  };
  attributes: {
    componentGridItemSettings: Attribute.Component<'global-components.settings-json'>;
    settings: Attribute.Component<'global-components.settings-json'>;
    expandIcon: Attribute.Media;
    faqCategories: Attribute.Component<'faq.faq-category', true>;
    type: Attribute.Enumeration<['tocCategories', 'categorySelect']> &
      Attribute.Required &
      Attribute.DefaultTo<'tocCategories'>;
    faqType: Attribute.Enumeration<['accordion', 'text']> &
      Attribute.Required &
      Attribute.DefaultTo<'accordion'>;
    collapseIcon: Attribute.Media;
  };
}

export interface FaqFaqCategory extends Schema.Component {
  collectionName: 'cmp_faq_categories';
  info: {
    displayName: 'FAQ Category';
    icon: 'arrow-alt-circle-down';
    description: '';
  };
  attributes: {
    faq_category: Attribute.Relation<
      'faq.faq-category',
      'oneToOne',
      'api::faq-category.faq-category'
    >;
    technicalName: Attribute.String & Attribute.Required & Attribute.Private;
  };
}

export interface FaqFaqWrapper extends Schema.Component {
  collectionName: 'cmp_faq_wrappers';
  info: {
    displayName: 'FAQ Wrapper';
  };
  attributes: {
    summary: Attribute.Text &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    details: Attribute.RichText &
      Attribute.Required &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    summaryIcon: Attribute.Media &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: false;
        };
      }>;
    technicalName: Attribute.String & Attribute.Required & Attribute.Private;
    settings: Attribute.Component<'global-components.settings-json'>;
  };
}

export interface FaqFaq extends Schema.Component {
  collectionName: 'cmp_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'question';
    description: '';
  };
  attributes: {
    faq: Attribute.Relation<'faq.faq', 'oneToOne', 'api::faq.faq'>;
    technicalName: Attribute.String & Attribute.Required & Attribute.Private;
  };
}

export interface FormsFormField extends Schema.Component {
  collectionName: 'cmp_form_fields';
  info: {
    displayName: 'Form Field';
    icon: 'list';
    description: '';
  };
  attributes: {
    kind: Attribute.Enumeration<
      [
        'inputText',
        'inputPassword',
        'inputEmail',
        'inputDate',
        'inputHidden',
        'inputTel',
        'inputNumber',
        'inputCheckbox',
        'inputFile',
        'inputTextarea',
        'select'
      ]
    > &
      Attribute.DefaultTo<'inputText'>;
    options: Attribute.JSON;
    label: Attribute.String;
    checked: Attribute.Boolean;
    identifier: Attribute.String;
    max: Attribute.String;
    maxlength: Attribute.Integer;
    min: Attribute.String;
    minlength: Attribute.Integer;
    multiple: Attribute.Boolean;
    name: Attribute.String;
    pattern: Attribute.String;
    placeholder: Attribute.String;
    required: Attribute.Boolean & Attribute.DefaultTo<true>;
    title: Attribute.String;
    readonly: Attribute.Boolean & Attribute.DefaultTo<false>;
    useThisField: Attribute.Boolean & Attribute.DefaultTo<true>;
    gridItemSettings: Attribute.JSON;
    disabled: Attribute.Boolean & Attribute.DefaultTo<false>;
    muiHelperText: Attribute.String;
    inputmode: Attribute.Enumeration<
      ['none', 'text', 'tel', 'url', 'email', 'numeric', 'decimal', 'search']
    > &
      Attribute.DefaultTo<'text'>;
    step: Attribute.Integer;
    accept: Attribute.String;
    autocomplete: Attribute.Enumeration<
      [
        'off',
        'on',
        'name',
        'honorific-prefix',
        'given-name',
        'additional-name',
        'family-name',
        'honorific-suffix',
        'nickname',
        'email',
        'username',
        'new-password',
        'current-password',
        'one-time-code',
        'organization-title',
        'organization',
        'street-address',
        'address-line1',
        'address-line2',
        'address-line3',
        'address-level4',
        'address-level3',
        'address-level2',
        'address-level1',
        'country',
        'country-name',
        'postal-code',
        'cc-name',
        'cc-given-name',
        'cc-additional-name',
        'cc-family-name',
        'cc-number',
        'cc-exp',
        'cc-exp-month',
        'cc-exp-year',
        'cc-csc',
        'cc-type',
        'transaction-currency',
        'transaction-amount',
        'language',
        'bday',
        'bday-day',
        'bday-month',
        'bday-year',
        'sex',
        'tel',
        'tel-country-code',
        'tel-national',
        'tel-area-code',
        'tel-local',
        'tel-extension',
        'impp',
        'url',
        'photo'
      ]
    >;
    patternErrorMessage: Attribute.String;
    nameForErrorMessage: Attribute.String;
    muiInputAdornmentVisibility: Attribute.Boolean & Attribute.DefaultTo<false>;
    defaultUploadIcon: Attribute.Media;
    interactedUploadIcon: Attribute.Media;
    settings: Attribute.Component<'global-components.settings-json'>;
    typeErrorMessage: Attribute.String;
  };
}

export interface FormsFormGroup extends Schema.Component {
  collectionName: 'cmp_form_groups';
  info: {
    displayName: 'Form Group';
    icon: 'border-all';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    formFields: Attribute.Component<'forms.form-field', true>;
    fieldsGridContainerSettings: Attribute.JSON;
  };
}

export interface FormsFormStep extends Schema.Component {
  collectionName: 'cmp_form_steps';
  info: {
    displayName: 'Form Step';
    icon: 'shoe-prints';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    defaultStepIcon: Attribute.Media;
    activeStepIcon: Attribute.Media;
    completedStepIcon: Attribute.Media;
    formGroups: Attribute.Component<'forms.form-group', true>;
    fieldsVariant: Attribute.Enumeration<['filled', 'outlined', 'standard']> &
      Attribute.DefaultTo<'outlined'>;
    fieldsColor: Attribute.Enumeration<['primary', 'secondary']> &
      Attribute.DefaultTo<'primary'>;
  };
}

export interface FormsForm extends Schema.Component {
  collectionName: 'cmp_forms';
  info: {
    displayName: 'Form';
    icon: 'list-alt';
    description: '';
  };
  attributes: {
    form: Attribute.Relation<'forms.form', 'oneToOne', 'api::form.form'>;
    componentGridItemSettings: Attribute.Component<'global-components.settings-json'>;
    settings: Attribute.Component<'global-components.settings-json'>;
  };
}

export interface GlobalComponentsCoverImage extends Schema.Component {
  collectionName: 'cmp_components_cover_images';
  info: {
    displayName: 'Cover Image';
    description: '';
  };
  attributes: {
    largeImage: Attribute.Media & Attribute.Required;
    smallImage: Attribute.Media & Attribute.Required;
    description: Attribute.RichText;
    settings: Attribute.JSON;
  };
}

export interface GlobalComponentsImageDimensions extends Schema.Component {
  collectionName: 'cmp_image_dimensions';
  info: {
    displayName: 'Image Dimensions';
  };
  attributes: {
    width: Attribute.Integer & Attribute.Required;
    height: Attribute.Integer & Attribute.Required;
  };
}

export interface GlobalComponentsPermissions extends Schema.Component {
  collectionName: 'cmp_permissions';
  info: {
    displayName: 'Permissions';
    description: '';
  };
  attributes: {
    availableOnlyFor: Attribute.Enumeration<['authenticated', 'anonymous']> &
      Attribute.Required;
    redirectUrl: Attribute.String;
  };
}

export interface GlobalComponentsProgressAnimation extends Schema.Component {
  collectionName: 'cmp_progress_animations';
  info: {
    displayName: 'Progress Animation';
    description: '';
  };
  attributes: {
    richText: Attribute.RichText;
    image: Attribute.Media;
    settings: Attribute.Component<'global-components.settings-json'>;
    type: Attribute.Enumeration<['richText', 'image']>;
    delay: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
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

export interface MenusMenuGroup extends Schema.Component {
  collectionName: 'cmp_menu_groups';
  info: {
    displayName: 'Menu Group';
    icon: 'stream';
  };
  attributes: {
    title: Attribute.String;
    technicalName: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Default group'>;
    menuItems: Attribute.Component<'menus.menu-item', true>;
  };
}

export interface MenusMenuItem extends Schema.Component {
  collectionName: 'cmp_menu_items';
  info: {
    displayName: 'Menu Item';
    icon: 'sitemap';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    menuSubItems: Attribute.Component<'menus.menu-sub-item', true>;
    icon: Attribute.Media;
    linkOpeningType: Attribute.Enumeration<['Open', 'Open in new tab']> &
      Attribute.DefaultTo<'Open'>;
  };
}

export interface MenusMenuSubItem extends Schema.Component {
  collectionName: 'cmp_menu_sub_items';
  info: {
    displayName: 'Menu Sub Item';
    icon: 'sort-down';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    icon: Attribute.Media;
  };
}

export interface NavigationsAuxiliaryNavigation extends Schema.Component {
  collectionName: 'cmp_navigations';
  info: {
    displayName: 'Auxiliary Navigation';
    icon: 'align-left';
    description: '';
  };
  attributes: {
    settings: Attribute.Component<'global-components.settings-json'>;
    componentGridItemSettings: Attribute.Component<'global-components.settings-json'>;
    useBreakpoint: Attribute.Component<'global-components.use-breakpoint'> &
      Attribute.Required;
  };
}

export interface NavigationsPrimaryNavigation extends Schema.Component {
  collectionName: 'cmp_primary_navigations';
  info: {
    displayName: 'Primary Navigation';
    icon: 'align-left';
    description: '';
  };
  attributes: {
    settings: Attribute.Component<'global-components.settings-json'>;
    componentGridItemSettings: Attribute.Component<'global-components.settings-json'>;
    useBreakpoint: Attribute.Component<'global-components.use-breakpoint'> &
      Attribute.Required;
    expandIcon: Attribute.Media;
    collapseIcon: Attribute.Media;
  };
}

export interface NavigationsSecondaryNavigation extends Schema.Component {
  collectionName: 'cmp_secondary_navigations';
  info: {
    displayName: 'Secondary Navigation';
    icon: 'align-right';
  };
  attributes: {
    settings: Attribute.Component<'global-components.settings-json'>;
    componentGridItemSettings: Attribute.Component<'global-components.settings-json'>;
    useBreakpoint: Attribute.Component<'global-components.use-breakpoint'> &
      Attribute.Required;
  };
}

export interface NavigationsUserAccountNavigation extends Schema.Component {
  collectionName: 'cmp_user_account_navigations';
  info: {
    displayName: 'User Account Navigation';
    description: '';
  };
  attributes: {
    menuType: Attribute.Enumeration<['tabs', 'dropdown']> &
      Attribute.Required &
      Attribute.DefaultTo<'tabs'>;
    componentGridItemSettings: Attribute.Component<'global-components.settings-json'>;
    settings: Attribute.Component<'global-components.settings-json'>;
    useTopLevelNavigation: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface PageComponentsBreadcrumbs extends Schema.Component {
  collectionName: 'cmp_breadcrumbs';
  info: {
    displayName: 'Breadcrumbs';
  };
  attributes: {
    separatorIcon: Attribute.Media;
    useBreakpoint: Attribute.Component<'global-components.use-breakpoint'> &
      Attribute.Required;
    settings: Attribute.Component<'global-components.settings-json'>;
    componentGridItemSettings: Attribute.Component<'global-components.settings-json'>;
  };
}

export interface PageComponentsIframe extends Schema.Component {
  collectionName: 'cmp_iframes';
  info: {
    displayName: 'Iframe';
    icon: 'chalkboard';
    description: '';
  };
  attributes: {
    src: Attribute.String & Attribute.Required;
    iframeTitle: Attribute.String & Attribute.Required;
    settings: Attribute.Component<'global-components.settings-json'>;
    componentGridItemSettings: Attribute.Component<'global-components.settings-json'>;
  };
}

export interface PageComponentsLanguageSwitcher extends Schema.Component {
  collectionName: 'cmp_language_switchers';
  info: {
    displayName: 'Language Switcher';
    icon: 'arrow-down';
    description: '';
  };
  attributes: {
    componentGridItemSettings: Attribute.Component<'global-components.settings-json'>;
    settings: Attribute.Component<'global-components.settings-json'>;
    useBreakpoint: Attribute.Component<'global-components.use-breakpoint'> &
      Attribute.Required;
  };
}

export interface PageComponentsLogo extends Schema.Component {
  collectionName: 'cmp_logos';
  info: {
    displayName: 'Logo';
    icon: 'image';
    description: '';
  };
  attributes: {
    lightLarge: Attribute.Media;
    darkLarge: Attribute.Media;
    lightSmall: Attribute.Media;
    darkSmall: Attribute.Media;
    onClick: Attribute.String;
    useBreakpoint: Attribute.Component<'global-components.use-breakpoint'> &
      Attribute.Required;
    settings: Attribute.Component<'global-components.settings-json'>;
    componentGridItemSettings: Attribute.Component<'global-components.settings-json'>;
    logoSizeSwitchingBreakpoint: Attribute.Enumeration<
      ['xsUp', 'smUp', 'mdUp', 'lgUp', 'xlUp']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'mdUp'>;
    smallImageDimensions: Attribute.Component<'global-components.image-dimensions'>;
    largeImageDimensions: Attribute.Component<'global-components.image-dimensions'>;
  };
}

export interface PageComponentsRichText extends Schema.Component {
  collectionName: 'cmp_rich_texts';
  info: {
    displayName: 'Rich Text';
    icon: 'align-left';
    description: '';
  };
  attributes: {
    content: Attribute.RichText & Attribute.Required;
    componentGridItemSettings: Attribute.Component<'global-components.settings-json'>;
  };
}

export interface PageComponentsThemeSwitcher extends Schema.Component {
  collectionName: 'cmp_theme_switchers';
  info: {
    displayName: 'Theme Switcher';
    icon: 'exchange-alt';
    description: '';
  };
  attributes: {
    componentGridItemSettings: Attribute.Component<'global-components.settings-json'>;
    settings: Attribute.Component<'global-components.settings-json'>;
    useBreakpoint: Attribute.Component<'global-components.use-breakpoint'> &
      Attribute.Required;
  };
}

export interface SeoDefaultSeo extends Schema.Component {
  collectionName: 'cmp_default_seos';
  info: {
    displayName: 'Default Seo';
    icon: 'search-location';
    description: '';
  };
  attributes: {
    titleTemplate: Attribute.String;
    defaultTitle: Attribute.String;
    dangerouslySetAllPagesToNoIndex: Attribute.Boolean;
    dangerouslySetAllPagesToNoFollow: Attribute.Boolean;
    description: Attribute.String;
  };
}

export interface SeoMeta extends Schema.Component {
  collectionName: 'cmp_metas';
  info: {
    displayName: 'Meta';
    icon: 'search-dollar';
  };
  attributes: {
    name: Attribute.String;
    property: Attribute.String;
    content: Attribute.String;
  };
}

export interface SeoSeo extends Schema.Component {
  collectionName: 'cmp_seos';
  info: {
    displayName: 'SEO';
    icon: 'search';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    meta: Attribute.Component<'seo.meta', true>;
    microMarkup: Attribute.JSON;
    openGraph: Attribute.JSON;
  };
}

export interface SliderBannerSlide extends Schema.Component {
  collectionName: 'cmp_banner_slides';
  info: {
    displayName: 'Banner Slide';
    icon: 'file-import';
    description: '';
  };
  attributes: {
    banner: Attribute.Relation<
      'slider.banner-slide',
      'oneToOne',
      'api::banner.banner'
    >;
    technicalName: Attribute.String & Attribute.Required & Attribute.Private;
  };
}

export interface SliderBannersSlider extends Schema.Component {
  collectionName: 'cmp_banners_sliders';
  info: {
    displayName: 'Banners Slider';
    icon: 'images';
    description: '';
  };
  attributes: {
    settings: Attribute.Component<'global-components.settings-json'>;
    componentGridItemSettings: Attribute.Component<'global-components.settings-json'>;
    banners: Attribute.Component<'slider.banner-slide', true> &
      Attribute.Required;
    title: Attribute.String;
    sliderSettings: Attribute.Component<'global-components.settings-json'>;
  };
}

export interface UserAccountUserAccountMenuButton extends Schema.Component {
  collectionName: 'cmp_user_account_menu_buttons';
  info: {
    displayName: 'User Account Menu Button';
    icon: 'align-justify';
  };
  attributes: {
    buttonConfig: Attribute.Component<'buttons.specialty-button'> &
      Attribute.Required;
    useBreakpoint: Attribute.Component<'global-components.use-breakpoint'> &
      Attribute.Required;
    componentGridItemSettings: Attribute.Component<'global-components.settings-json'>;
    settings: Attribute.Component<'global-components.settings-json'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'apartment.apartment-title-placeholder': ApartmentApartmentTitlePlaceholder;
      'apartments.apartment-category-wrapper': ApartmentsApartmentCategoryWrapper;
      'apartments.apartment-placeholder': ApartmentsApartmentPlaceholder;
      'apartments.apartment-wrapper': ApartmentsApartmentWrapper;
      'apartments.apartment': ApartmentsApartment;
      'apartments.apartments-catalog-search': ApartmentsApartmentsCatalogSearch;
      'apartments.apartments-catalog': ApartmentsApartmentsCatalog;
      'buttons.apartment-anonymous-action-button': ButtonsApartmentAnonymousActionButton;
      'buttons.apartment-authenticated-action-button': ButtonsApartmentAuthenticatedActionButton;
      'buttons.banner-anonymous-action-button': ButtonsBannerAnonymousActionButton;
      'buttons.banner-authenticated-action-button': ButtonsBannerAuthenticatedActionButton;
      'buttons.global-anonymous-action-button': ButtonsGlobalAnonymousActionButton;
      'buttons.global-authenticated-action-button': ButtonsGlobalAuthenticatedActionButton;
      'buttons.global-generic-action-button': ButtonsGlobalGenericActionButton;
      'buttons.specialty-button': ButtonsSpecialtyButton;
      'buttons.specialty-link-button': ButtonsSpecialtyLinkButton;
      'buttons.specialty-stateful-button': ButtonsSpecialtyStatefulButton;
      'countdown.countdown': CountdownCountdown;
      'faq.faq-catalog-manual': FaqFaqCatalogManual;
      'faq.faq-catalog': FaqFaqCatalog;
      'faq.faq-category': FaqFaqCategory;
      'faq.faq-wrapper': FaqFaqWrapper;
      'faq.faq': FaqFaq;
      'forms.form-field': FormsFormField;
      'forms.form-group': FormsFormGroup;
      'forms.form-step': FormsFormStep;
      'forms.form': FormsForm;
      'global-components.cover-image': GlobalComponentsCoverImage;
      'global-components.image-dimensions': GlobalComponentsImageDimensions;
      'global-components.permissions': GlobalComponentsPermissions;
      'global-components.progress-animation': GlobalComponentsProgressAnimation;
      'global-components.settings-json': GlobalComponentsSettingsJson;
      'global-components.slider-settings-json': GlobalComponentsSliderSettingsJson;
      'global-components.theme': GlobalComponentsTheme;
      'global-components.use-breakpoint': GlobalComponentsUseBreakpoint;
      'menus.menu-group': MenusMenuGroup;
      'menus.menu-item': MenusMenuItem;
      'menus.menu-sub-item': MenusMenuSubItem;
      'navigations.auxiliary-navigation': NavigationsAuxiliaryNavigation;
      'navigations.primary-navigation': NavigationsPrimaryNavigation;
      'navigations.secondary-navigation': NavigationsSecondaryNavigation;
      'navigations.user-account-navigation': NavigationsUserAccountNavigation;
      'page-components.breadcrumbs': PageComponentsBreadcrumbs;
      'page-components.iframe': PageComponentsIframe;
      'page-components.language-switcher': PageComponentsLanguageSwitcher;
      'page-components.logo': PageComponentsLogo;
      'page-components.rich-text': PageComponentsRichText;
      'page-components.theme-switcher': PageComponentsThemeSwitcher;
      'seo.default-seo': SeoDefaultSeo;
      'seo.meta': SeoMeta;
      'seo.seo': SeoSeo;
      'slider.banner-slide': SliderBannerSlide;
      'slider.banners-slider': SliderBannersSlider;
      'user-account.user-account-menu-button': UserAccountUserAccountMenuButton;
    }
  }
}
