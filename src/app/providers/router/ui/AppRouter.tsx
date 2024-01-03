import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader'

export const AppRouter = () => {
  return (
    <div className="page-wrapper">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {Object.values(routeConfig).map(({ element, path }) => (
            <Route key={path} element={element} path={path} />
          ))}
        </Routes>
      </Suspense>
    </div>
  )
}
