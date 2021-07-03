import React, { Fragment } from 'react';
import classes from './PageTitle.module.scss';

import Title from '@Type/Title/Title.component';
import HoverModal from '@Gen/HoverModal/HoverModal.component';

const PageTitle: React.FC = () => {
    return (
        <div className={classes.background}>
            <Title type="lead">
                <Fragment>
                    Take a sneak peak at my latest widgets
                    <HoverModal theme="light" direction="left">
                        <Fragment>
                            These are a few of the items that I have been
                            working on as part of larger projects in progress.
                            To see more details about each widget, navigate to
                            the&nbsp;
                            <a className={classes.link} href="/projects">
                                complete projects here
                            </a>
                            . But while you're here, each item in the showcase
                            has an explanation about it as well as controls
                            specific to it. Further general options are
                            available if you click on the arrow to the right.
                        </Fragment>
                    </HoverModal>
                </Fragment>
            </Title>
        </div>
    );
};

export default PageTitle;
