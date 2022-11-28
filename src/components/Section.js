export default class Section {
  constructor({ items, renderer }, selector) {
    this._renderedItems = items;
    this._renderer = renderer;
    // eslint-disable-next-line no-undef
    this._container = document.querySelector(selector);
  }

  renderItems() {
    // eslint-disable-next-line arrow-parens
    this._renderedItems.forEach(item => this.addItem(item));
  }

  addItem(item) {
    const card = this._renderer(item);
    this._container.append(card);
  }
}
