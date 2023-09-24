import { mount } from "@vue/test-utils";
import { test, expect, describe } from "vitest";
import SidebarBox from "../../components/TheSidebar.vue";

describe("SidebarBox", () => {
  test("renders the search input and categories", () => {
    const wrapper = mount(SidebarBox, {
      props: {
        sidebar_dates: [
          {
            theme: "Category 1",
            sub_titles: ["Title 1", "Title 2"],
          },
          {
            theme: "Category 2",
            sub_titles: ["Title 3", "Title 4"],
          },
        ],
      },
    });

    expect(wrapper.find(".search-input").exists()).toBe(true);
    expect(wrapper.findAll(".categories").length).toBe(2);
  });
});
