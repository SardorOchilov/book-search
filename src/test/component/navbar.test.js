import { mount } from "@vue/test-utils";
import { test, expect, describe } from "vitest";
import Navbar from "../../components/TheNavbar.vue";

describe("Navbar.vue", () => {
  test("renders navbar links correctly when user is logged in", async () => {

    const wrapper = mount(Navbar, {
      props: {
        count: 3,
        books: [
          {
            title: "Book 1",
            author: "Author 1",
            img: "book1.jpg",
            id: "1",
          },
          {
            title: "Book 2",
            author: "Author 2",
            img: "book2.jpg",
            id: "2",
          },
        ],
      },

    });

    expect(wrapper.find(".nav-links .active").text()).toBe("Book Store");

    // expect(wrapper.find(".wishlist-icon .badge span").text()).toBe("3");
  });

  test("renders navbar links correctly when user is not logged in", async () => {
    const wrapper = mount(Navbar, {
      props: {
        count: 0,
      },
    });

    expect(wrapper.find(".nav-btn").text()).toContain("register");
    expect(wrapper.find(".nav-btn").text()).toContain("login");
  });
});
