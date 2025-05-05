import React, { JSX } from 'react';
import { useTranslation } from '@wowfinder/translations';
import {
    AttackScoresBlock,
    HitPoints,
    Initiative,
    MultiColumnStatsView,
    ResistancesBlock,
    SavesBlock,
    Speeds,
} from '../../../Creature';
import { DefenseScoresBlock } from '../../../Creature/Defense';
import { PersonalBlock } from '../../../Creature/PersonalDetails';
import { Header } from '../../../helpers/Header';
import { Columns } from '../Columns';
import Page from '../Page';
import { PageArgs } from '../types';
import { LogoImage } from './LogoImage';
import {
    fullStats,
    getAttackScores,
    getHitPoints,
    getSpeeds,
    getStatTotals,
} from './helpers';

function MainPage({ char, xp, visible = true }: PageArgs): JSX.Element {
    const { t } = useTranslation();
    return (
        <Page key="Main" id="main" visible={visible}>
            <div />
            <LogoImage src={null as any} />
            <PersonalBlock char={char} xp={xp} />
            <Columns
                columns={[
                    {
                        id: 'MainLeft',
                        children: (
                            <>
                                { /* TODO: Compute / retrieve full stats breadkdown */ }
                                <MultiColumnStatsView data={fullStats(char)} />
                                <Header>{t('charsheet.hitpoints.h')}</Header>
                                <HitPoints base={getHitPoints(char).initial} />
                                <Header>{t('charsheet.armor.h')}</Header>
                                { /* TODO: Compute / retrieve values */}
                                <DefenseScoresBlock />
                                <Header>{t('charsheet.saves.h')}</Header>
                                { /* TODO: Compute / retrieve values */}
                                <SavesBlock />
                                <Header>{t('charsheet.resist.h')}</Header>
                                { /* TODO: Compute / retrieve values */}
                                <ResistancesBlock />
                                <Header>{t('charsheet.attack.h')}</Header>
                                <AttackScoresBlock {...getAttackScores(char)} />
                            </>
                        ),
                    },
                    {
                        id: 'MainRight',
                        children: (
                            <>
                                <Header>{t('charsheet.classes.h')}</Header>
                                <div>{/* TODO: add classes list */} WiP</div>
                                <Header>{t('charsheet.initiative.h')}</Header>
                                <Initiative
                                    dexterity={getStatTotals(char).dexterity}
                                />
                                <Header>{t('charsheet.speed.h')}</Header>
                                <Speeds speeds={getSpeeds(char)} />
                                <Header>{t('charsheet.traits.h')}</Header>
                                <div>
                                    {/* TODO: add traits + feats list */} WiP
                                </div>
                            </>
                        ),
                    },
                ]}
            />
        </Page>
    );
}

export { MainPage };
