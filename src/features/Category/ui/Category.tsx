import { LinkCustom } from 'share/ui/LinkCustom'
import { StateLink } from 'share/ui/LinkCustom/ui/LinkCustom'
import cls from '../models/Category.module.scss'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
export const Category: React.FC = memo(() => {
    const { t } = useTranslation('profile')
    return (<>
        <div className={cls.ContainerCategory} >
            <div className={cls.InnerCategory}>
                <LinkCustom classes={cls.LintC} to='#' state={StateLink.LINKRESET}>{t('lidově')}</LinkCustom>
                <LinkCustom classes={cls.LintC} to='#' state={StateLink.LINKRESET}>{t('solární panel')}</LinkCustom>
                <LinkCustom classes={cls.LintC} to='#' state={StateLink.LINKRESET}>{t('Kabela')}</LinkCustom>
                <LinkCustom classes={cls.LintC} to='#' state={StateLink.LINKRESET}>{t('Konektor')}</LinkCustom>
                <LinkCustom classes={cls.LintC} to='#' state={StateLink.LINKRESET}>{t('Měnič')}</LinkCustom>
                <LinkCustom classes={cls.LintC} to='#' state={StateLink.LINKRESET}>{t('Baterie')}</LinkCustom>
                <LinkCustom classes={cls.LintC} to='#' state={StateLink.LINKRESET}>{t('Montážní materiály')}</LinkCustom>
            </div>
            <hr/>
        </div>
    </>)

})
