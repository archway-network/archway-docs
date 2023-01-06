import { defineComponent, inject, InjectionKey, provide, Ref, ref } from 'vue';
import { omit, render, uniqueId } from '@/utils';

interface StateDefinition {
  id: string;
  value: Ref<string>;
  handleInput: (input: string) => void;
}

const TextInputContext = Symbol('TextInputContext') as InjectionKey<StateDefinition>;

const useTextInputContext = (component: string) => {
  const context = inject(TextInputContext);

  if (!context) {
    throw new Error(`<${component} /> is missing a parent <TextInput /> component.`);
  }

  return context;
};

export const TextInput = defineComponent({
  name: 'TextInput',

  props: {
    as: { type: String, default: 'div' },
    modelValue: { type: String, default: '' },
  },

  setup(props, { slots, attrs, emit }) {
    const id = `text-input-${uniqueId()}`;

    provide(TextInputContext, {
      id,
      value: ref(props.modelValue || ''),
      handleInput: input => {
        emit('update:modelValue', input);
      },
    });

    const passThroughProps = omit(props, ['modelValue']);

    return () => {
      return render({ name: 'TextInput', props: { ...passThroughProps }, slots, attrs });
    };
  },
});

export const Input = defineComponent({
  name: 'Input',

  props: {
    as: { type: String, default: 'input' },
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: '' },
    required: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },

  setup(props, { slots, attrs }) {
    const context = useTextInputContext('Input');

    const propsWeControl = {
      id: context.id,
      value: context.value.value,
      onInput: (event: InputEvent) => {
        const target = event.target as HTMLInputElement;
        context.handleInput(target.value);
      },
    };

    return () => {
      return render({ name: 'Input', props: { ...props, ...propsWeControl }, slots, attrs });
    };
  },
});

export const Textarea = defineComponent({
  name: 'Textarea',

  props: {
    as: { type: String, default: 'textarea' },
    placeholder: { type: String, default: '' },
    required: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },

  setup(props, { slots, attrs }) {
    const context = useTextInputContext('Textarea');

    const propsWeControl = {
      id: context.id,
      value: context.value.value,
      onInput: (event: InputEvent) => {
        const target = event.target as HTMLInputElement;
        context.handleInput(target.value);
      },
    };

    return () => {
      return render({ name: 'Textarea', props: { ...props, ...propsWeControl }, slots, attrs });
    };
  },
});

export const TextInputLabel = defineComponent({
  name: 'TextInputLabel',

  props: {
    as: { type: String, default: 'label' },
  },

  setup(props, { slots, attrs }) {
    const context = useTextInputContext('TextInputLabel');

    const id = `text-input-label-${uniqueId()}`;
    const propsWeControl = { id, for: context.id };

    return () => {
      return render({ name: 'TextInputLabel', props: { ...props, ...propsWeControl }, slots, attrs });
    };
  },
});
