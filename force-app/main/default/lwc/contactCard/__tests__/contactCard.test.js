import { createElement } from 'lwc';
import ContactCard from 'c/contactCard';

describe('c-contact-card', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('is accessible when dreamforce is not completed', () => {
        const element = createElement('c-contact-card', {
            is: ContactCard
        });
    
        element.isDreamforceCompleted = false;
        document.body.appendChild(element);
        return Promise.resolve().then(() => expect(element).toBeAccessible());
    });

    it('is accessible when dreamforce is completed', () => {
        const element = createElement('c-contact-card', {
            is: ContactCard
        });
    
        element.isDreamforceCompleted = true;
        document.body.appendChild(element);
        return Promise.resolve().then(() => expect(element).toBeAccessible());
    });
});