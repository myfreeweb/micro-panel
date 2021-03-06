import { mpe } from './util.js'

function matchingKey (action) {
	switch (action) {
		case 'like': return 'like-of'
		case 'repost': return 'repost-of'
		case 'bookmark': return 'bookmark-of'
		case 'quotation': return 'quotation-of'
		case 'tag': return 'tag-of'
		default: return 'in-reply-to'
	}
}

export default class IndieAction extends HTMLElement {
	connectedCallback () {
		for (const el of this.querySelectorAll('a, button')) {
			el.addEventListener('click', e => {
				e.preventDefault()
				e.stopPropagation()
				mpe().newReaction(matchingKey(this.getAttribute('do')), this.getAttribute('with'))
			})
		}
	}
}

customElements.define('indie-action', IndieAction)
