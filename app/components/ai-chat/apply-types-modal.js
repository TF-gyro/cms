import Component from '@glimmer/component';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { Modal } from 'bootstrap';

export default class AiChatApplyTypesModalComponent extends Component {
  @service aiChat;

  modal = null;

  /**
   * Show the modal
   */
  @action
  show() {
    if (!this.modal) {
      const modalElement = document.getElementById('applyTypesModal');
      if (modalElement) {
        this.modal = new Modal(modalElement);
      }
    }
    if (this.modal) {
      this.modal.show();
    }
  }

  /**
   * Hide the modal
   */
  @action
  hide() {
    if (this.modal) {
      this.modal.hide();
    }
  }

  /**
   * Handle apply button click
   */
  @action
  async handleApply() {
    this.hide();
    await this.aiChat.applyTypesJson();
  }

  /**
   * Handle cancel button click
   */
  @action
  handleCancel() {
    this.hide();
    this.aiChat.cancelApplyTypesJson();
  }
}
