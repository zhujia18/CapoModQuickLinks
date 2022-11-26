import Component from 'flarum/common/Component';
import Link from 'flarum/common/components/Link';

export default class QuickLinksComponent extends Component {
    oninit(vnode) {
        super.oninit(vnode);

        this.links = [
            {
                icon: 'fa-solid fa-tags',
                text: '全部标签',
                link: '/tags'
            },
            {
                icon: 'fa-solid fa-gears',
                text: '改装',
                link: '/t/refitting'
            },
            {
                icon: 'fa-solid fa-school',
                text: '教程',
                link: '/t/course'
            },
            {
                icon: 'fa-regular fa-circle-question',
                text: '问答',
                link: '/t/qanda'
            }
        ]
    }

    view() {
        return m("div[class='container quicklinks']",
            this.links.map(x =>
                Link.component({
                    href: x.link
                }, m.trust(this.linkText(x)))
            )
        );
    }

    linkText(link) {
        let t = '';

        if (link.icon) {
            t += `<i class="${link.icon}"></i>`;

            if (link.text) {
                t += ' ';
            }
        }

        if (link.text) {
            t += link.text;
        }

        return t;
    }
}
