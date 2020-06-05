// @ts-nocheck
import { ApplyPluginsType } from '/Users/chao/Lab/antfox/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/_demos/index",
    "component": require('/Users/chao/Lab/antfox/src/App/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/action-api",
    "component": require('/Users/chao/Lab/antfox/src/App/Api/ActionApi.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/field-as-api",
    "component": require('/Users/chao/Lab/antfox/src/App/Api/FieldAsApi.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/field-effect-api",
    "component": require('/Users/chao/Lab/antfox/src/App/Api/FieldEffectApi.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/field-normalize-serialize",
    "component": require('/Users/chao/Lab/antfox/src/App/Api/FieldNormalizeSerialize.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/field-remap",
    "component": require('/Users/chao/Lab/antfox/src/App/Api/FieldRemap.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/form-api",
    "component": require('/Users/chao/Lab/antfox/src/App/Api/FormApi.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/yup",
    "component": require('/Users/chao/Lab/antfox/src/App/Api/Yup.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-1",
    "component": require('/Users/chao/Lab/antfox/src/App/Example/UserForm/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/index-2",
    "component": require('/Users/chao/Lab/antfox/src/App/Example/QueryForm/index.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/init-on-field",
    "component": require('/Users/chao/Lab/antfox/src/App/LifeEvents/Init/InitOnField.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/init-on-form",
    "component": require('/Users/chao/Lab/antfox/src/App/LifeEvents/Init/InitOnForm.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/init-on-mix",
    "component": require('/Users/chao/Lab/antfox/src/App/LifeEvents/Init/InitOnMix.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/mounted-act",
    "component": require('/Users/chao/Lab/antfox/src/App/LifeEvents/Mounted/MountedAct.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/mounted-field",
    "component": require('/Users/chao/Lab/antfox/src/App/LifeEvents/Mounted/MountedField.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/unmount-act",
    "component": require('/Users/chao/Lab/antfox/src/App/LifeEvents/Unmount/UnmountAct.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/unmount-field",
    "component": require('/Users/chao/Lab/antfox/src/App/LifeEvents/Unmount/UnmountField.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/change-act",
    "component": require('/Users/chao/Lab/antfox/src/App/LifeEvents/Change/ChangeAct.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/change-field",
    "component": require('/Users/chao/Lab/antfox/src/App/LifeEvents/Change/ChangeField.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/reset-act",
    "component": require('/Users/chao/Lab/antfox/src/App/LifeEvents/Reset/ResetAct.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/reset-field",
    "component": require('/Users/chao/Lab/antfox/src/App/LifeEvents/Reset/ResetField.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/lazy-affect",
    "component": require('/Users/chao/Lab/antfox/src/App/LifeEvents/LazyAffect/LazyAffect.tsx').default,
    "exact": true
  },
  {
    "path": "/_demos/destroy",
    "component": require('/Users/chao/Lab/antfox/src/App/LifeEvents/Destroy/Destroy.tsx').default,
    "exact": true
  },
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('/Users/chao/Lab/antfox/node_modules/@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"antfox","meta":{}}],"/api":[{"path":"/api","title":"Api","meta":{}}],"/examples":[{"path":"/examples","title":"Examples","meta":{}}],"/life":[{"path":"/life","title":"LifeEvents","meta":{}}]}},"locales":[],"navs":{"*":[{"path":"/api","title":"Api"},{"path":"/life","title":"Life"},{"path":"/examples","title":"Examples"}]},"title":"antfox","mode":"site"},
      ...props,
    }),
    "routes": [
      {
        "path": "/",
        "component": require('/Users/chao/Lab/antfox/docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1591083366000,
          "slugs": [
            {
              "depth": 1,
              "value": "antfox",
              "heading": "antfox"
            }
          ],
          "title": "antfox"
        },
        "title": "antfox"
      },
      {
        "path": "/api",
        "component": require('/Users/chao/Lab/antfox/docs/api/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/api/index.md",
          "updatedTime": 1591093024000,
          "slugs": [
            {
              "depth": 1,
              "value": "Api",
              "heading": "api"
            }
          ],
          "title": "Api",
          "nav": {
            "path": "/api",
            "title": "Api"
          }
        },
        "title": "Api"
      },
      {
        "path": "/examples",
        "component": require('/Users/chao/Lab/antfox/docs/examples/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/examples/index.md",
          "updatedTime": 1591184855000,
          "slugs": [
            {
              "depth": 1,
              "value": "Examples",
              "heading": "examples"
            }
          ],
          "title": "Examples",
          "nav": {
            "path": "/examples",
            "title": "Examples"
          }
        },
        "title": "Examples"
      },
      {
        "path": "/life",
        "component": require('/Users/chao/Lab/antfox/docs/life/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/life/index.md",
          "updatedTime": 1591093024000,
          "slugs": [
            {
              "depth": 1,
              "value": "LifeEvents",
              "heading": "lifeevents"
            }
          ],
          "title": "LifeEvents",
          "nav": {
            "path": "/life",
            "title": "Life"
          }
        },
        "title": "LifeEvents"
      }
    ],
    "title": "antfox"
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
