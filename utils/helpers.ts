import { cloneVNode, h, Fragment, Ref, ComponentPublicInstance, Slots, VNode } from 'vue';

export function formatAmount(number: number): string {
  return new Intl.NumberFormat('en-US').format(number);
}

export function dom<T extends Element | ComponentPublicInstance>(ref?: Ref<T | null>): T | null {
  if (ref == null) return null;
  if (ref.value == null) return null;

  return (ref.value as { $el?: T }).$el ?? ref.value;
}

export function omit<T extends Record<any, any>>(object: T, keysToOmit: string[] = []) {
  const clone = Object.assign({}, object);
  for (let key of keysToOmit) {
    if (key in clone) delete clone[key];
  }

  return clone;
}

export const render = ({
  name,
  props,
  slots,
  scoped,
  attrs,
}: {
  name: string;
  props: Record<string, any>;
  slots: Slots;
  scoped?: Record<string, any>;
  attrs: Record<string, any>;
}) => {
  const { as, ...passThroughProps } = props;

  let children = slots.default?.(scoped);

  if (as === 'template') {
    children = flattenFragments(children as VNode[]);

    if (Object.keys(passThroughProps).length > 0 || Object.keys(attrs).length > 0) {
      let [firstChild, ...other] = children ?? [];

      if (!isValidElement(firstChild) || other.length > 0) {
        throw new Error(`The current component <${name} /> is rendering a "template" and you are passing props.`);
      }

      return cloneVNode(firstChild, Object.assign({}, passThroughProps));
    }

    if (Array.isArray(children) && children.length === 1) {
      return children[0];
    }

    return children;
  }

  return h(as, passThroughProps, children);
};

function flattenFragments(children: VNode[]): VNode[] {
  return children.flatMap(child => {
    if (child.type === Fragment) {
      return flattenFragments(child.children as VNode[]);
    }

    return [child];
  });
}

function isValidElement(input: any): boolean {
  if (input == null) return false; // No children
  if (typeof input.type === 'string') return true; // 'div', 'span', ...
  if (typeof input.type === 'object') return true; // Other components
  if (typeof input.type === 'function') return true; // Built-ins like Transition
  return false; // Comments, strings, ...
}

let id = 0;
export const uniqueId = () => {
  return ++id;
};

export const isEmail = str => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(str));
};
