import { useTranslation } from 'react-i18next'
import cls from './PageError.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface PageErrorProps {
  className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation()

  const reloadPage = () => {
    location.reload()
  }
  return (
    <div className={classNames(cls.PageError, {}, [className ?? ''])}>
      <p>{t('Что-то пошло не так')}</p>
      <Button theme={ThemeButton.SUBMIT} onClick={reloadPage}>
        {t('Обновить страницу')}
      </Button>
    </div>
  )
}
