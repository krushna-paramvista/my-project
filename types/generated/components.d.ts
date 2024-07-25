import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentComponent extends Schema.Component {
  collectionName: 'components_component_components';
  info: {
    displayName: 'component';
    icon: 'calendar';
    description: '';
  };
  attributes: {
    Hourse: Attribute.String & Attribute.Required;
    Day: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'component.component': ComponentComponent;
    }
  }
}
