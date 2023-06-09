import { Component, Host, h, Prop, Element } from '@stencil/core';
import { hasShadowDom } from '../../utils/utils';

@Component({
  tag: 'pds-button',
  styleUrl: 'pds-button.css',
  shadow: { delegatesFocus: true },
})
export class PdsButton {
  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) variant: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Prop({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';
  @Prop({ reflect: true }) disabled = false;
  @Prop({ reflect: true }) loading = false;
  @Prop({
    attribute: 'icon-only',
    reflect: true,
  })
  iconOnly: boolean = false;
  @Prop({ attribute: 'accessible-name' }) accessibleName: string | undefined;
  @Prop() block = false;
  @Prop() type: 'submit' | 'reset' | 'button' = 'button';
  // comportamiento como anchor <a></a>
  @Prop() href: string | undefined;
  @Prop() target: '_blank' | '_parent' | '_self' | '_top' = '_self';
  @Prop() rel: string | undefined;

  private handleClick = (ev: Event) => {
    if (hasShadowDom(this.el)) {
      const form = this.el.closest('form');
      if (form) {
        ev.preventDefault();

        const fakeButton = document.createElement('button');
        fakeButton.type = this.type;
        fakeButton.style.display = 'none';
        form.appendChild(fakeButton);
        fakeButton.click();
        fakeButton.remove();
      }
    }
  };

  render() {
    const { disabled, accessibleName, type, href, rel, target } = this;
    const TagType = href === undefined ? 'button' : ('a' as any);
    const attrs =
      TagType === 'button'
        ? { type }
        : {
            href,
            rel,
            target,
          };

    return (
      <Host onClick={this.handleClick} aria-disabled={disabled ? 'true' : null}>
        <TagType class="button" {...attrs} aria-label={accessibleName} title={accessibleName} disabled={disabled}>
          <slot></slot>
        </TagType>
      </Host>
    );
  }
}
