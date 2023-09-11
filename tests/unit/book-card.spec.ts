import { mount } from "@vue/test-utils";
import BookCard from "../../src/components/TheBookCard.vue";

describe("Book-Card", () => {
  it("renders book-card components", () => {
    const wrapper = mount(BookCard);

    expect(wrapper.html()).toContain('author')
    expect(wrapper.html()).toContain('title')
    expect(wrapper.html()).toContain('See detail')
  });
});
