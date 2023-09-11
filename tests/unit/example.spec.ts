import { mount } from "@vue/test-utils";
import Navbar from "../../src/components/TheNavbar.vue";

describe("Navbar", () => {
  it("renders navbar components", () => {
    const wrapper = mount(Navbar);

    console.log(wrapper.html());
  });
});
