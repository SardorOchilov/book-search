import { mount } from "@vue/test-utils";
import { test, expect, describe } from "vitest";

import TheBookCardVue from "../../components/TheBookCard.vue";

describe("TheBookCard.vue", () => {
  test("See detail button is clicked ", async () => {
    const bookComp = mount(TheBookCardVue, {
      propsData: {
        id: "1234",
        title: "theme",
        author: "person",
        img: "picture",
      },
    });

    const button1 = bookComp.find(".see-detail");
    const button2 = bookComp.find(".add-to-card");

    expect(button1.exists()).toBe(true);
    expect(button2.exists()).toBe(true);
  });

  test("this card on wishlist ", () => {
    const bookComp = mount(TheBookCardVue, {
      propsData: {
        id: "1234",
        title: "theme",
        author: "person",
        img: "picture",
        place: "wishlist",
      },
    });

    const button1 = bookComp.find(".see-detail");
    const button2 = bookComp.find(".add-to-card");
    const amount = bookComp.findAll(".amount");

    expect(button1.exists()).toBe(false);
    expect(button2.exists()).toBe(false);
    expect(amount).toHaveLength(2);
  });
});
