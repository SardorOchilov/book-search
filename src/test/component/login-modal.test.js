import { mount } from "@vue/test-utils";
import { test, expect, describe } from "vitest";
import LoginModal from "../../components/TheLoginModal.vue";

describe("LoginModal", () => {
  test("renders a login form", () => {
    const wrapper = mount(LoginModal);

    expect(wrapper.find("input#username").exists()).toBe(true);
    expect(wrapper.find("button.submit").exists()).toBe(true);
  });

  //   test('disables the login button when isLoading is true', async () => {
  //     const wrapper = mount(LoginModal);

  //     // wrapper.vm.isLoading = true;
  //     // await wrapper.vm.$nextTick();

  //     expect(wrapper.find('button.submit').attributes('disabled')).toBe('disabled');
  //   });

  test("enables the login button when isLoading is false and username is not empty", async () => {
    const wrapper = mount(LoginModal);

    wrapper.vm.isLoading = false;
    wrapper.vm.username = "testuser";
    await wrapper.vm.$nextTick();

    expect(
      wrapper.find("button.submit").attributes("disabled")
    ).toBeUndefined();
  });
});
