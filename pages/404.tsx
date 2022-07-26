export interface NotFoundI {}

export default function NotFound({}: NotFoundI) {
  return (
    <div className="container page center">
      <h2 className="not-found">404 - Not Found</h2>
    </div>
  )
}
