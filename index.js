/** @babel */

import { CompositeDisposable, Disposable } from "atom";

export default {

	windowMouseDown(e) {
		if (e.button === 1) {
			e.stopPropagation();
		}
	},

	/**
	 * Activate package
	 * @return {void}
	 */
	activate() {
		this.disposables = new CompositeDisposable();
		this.windowMouseDown = this.windowMouseDown.bind(this);

		window.addEventListener("mousedown", this.windowMouseDown, { capture: true, passive: true });

		this.disposables.add(new Disposable(() => {
			window.removeEventListener("mousedown", this.windowMouseDown, { capture: true, passive: true });
		}));
	},

	/**
	 * Deactivate package
	 * @return {void}
	 */
	deactivate() {
		this.disposables.dispose();
	},
};
