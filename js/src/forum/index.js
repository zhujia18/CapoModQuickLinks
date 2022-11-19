import app from 'flarum/app';
import {extend, override} from 'flarum/common/extend';
import IndexPage from 'flarum/forum/components/IndexPage';
import WelcomeHero from 'flarum/forum/components/WelcomeHero';
import QuickLinksComponent from './components/QuickLinksComponent';

app.initializers.add('fibraclick-flarum-tweaks', () => {
    // Add quick links to the top
    override(IndexPage.prototype, 'hero', (original) => {
        return app.current.get('routeName') === 'index'
            ? [WelcomeHero.component(), QuickLinksComponent.component()]
            : original();
    });
});
