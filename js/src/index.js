import app from 'flarum/app';
import {extend, override} from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';
import IndexPage from 'flarum/forum/components/IndexPage';
import WelcomeHero from 'flarum/forum/components/WelcomeHero';
import QuickLinksComponent from './components/QuickLinksComponent';

app.initializers.add('fibraclick-flarum-tweaks', () => {
    // Enable keywords feature
    extend(CommentPost.prototype, 'oninit', replaceKeywords);

    // Add quick links to the top
    override(IndexPage.prototype, 'hero', (original) => {
        return app.current.get('routeName') === 'index'
            ? [WelcomeHero.component(), QuickLinksComponent.component()]
            : original();
    });

    // Extend sidebar items with quick links
    extend(IndexPage.prototype, 'navItems', addLinksToSidebar);

    // Add secondary tags to sidebar
    //extend(IndexPage.prototype, 'navItems', addTagsToSidebar);

    addAnalyticsCompat();

    addAds();

    addPolicyConsent();

    User.prototype.flairName = Model.attribute('flairName');
    User.prototype.flairColor = Model.attribute('flairColor');

    extend(CommentPost.prototype, 'headerItems', addPostHeaderItems);

    extendUserModal();

    moveFlagButton();

    fixLikeButtonPosition();

    matchThemeColorToColorScheme();
}, -10);
// priority added to override like button priority
