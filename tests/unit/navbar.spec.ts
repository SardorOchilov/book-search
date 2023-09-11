import { mount } from "@vue/test-utils";
import Navbar from "../../src/components/TheNavbar.vue";

describe("Navbar", () => {
  it("renders navbar components", () => {
    const wrapper = mount(Navbar);

    expect(wrapper.html()).toContain('register')
    expect(wrapper.html()).toContain('login')
    expect(wrapper.html()).toContain('BookSearch')
  });
});
