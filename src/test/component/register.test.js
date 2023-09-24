import { mount } from "@vue/test-utils";
import { test, expect, describe } from "vitest";
import RegisterModal from '../../components/TheRegisterModal.vue';

describe('RegisterModal', () => {
  test('renders a registration form', () => {
    const wrapper = mount(RegisterModal);

    expect(wrapper.find('input#username').exists()).toBe(true);
    expect(wrapper.find('button.submit').exists()).toBe(true);
  });


  test('enables the registration button when isLoading is false and username is not empty', async () => {
    const wrapper = mount(RegisterModal);

    wrapper.vm.isLoading = false;
    wrapper.vm.username = 'testuser';
    await wrapper.vm.$nextTick();

    expect(wrapper.find('button.submit').attributes('disabled')).toBeUndefined();
  });
});