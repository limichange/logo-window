import { useEffect, useRef, useState } from 'react'

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  var e, t, n, o
  const [s, l] = useState<
    Partial<{
      width: number
      height: number
      offsetX: number
      offsetY: number
    }>
  >({
    width: 0,
    height: 0,
    offsetX: 0,
    offsetY: 0,
  })

  const c = useRef(s)

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    )
      return
    let e = requestAnimationFrame(function e2() {
      if (!c.current) return
      ;(window.screen.availWidth !== c.current.width ||
        window.screen.availHeight !== c.current.height ||
        window.screenX !== c.current.offsetX ||
        window.screenY !== c.current.offsetY) &&
        l({
          width: window.screen.availWidth,
          height: window.screen.availHeight,
          offsetX: window.screenX,
          offsetY: window.screenY,
        }),
        requestAnimationFrame(e2)
    })
    return () => {
      cancelAnimationFrame(e)
    }
  }, [])

  return (
    <main
      className='flex flex-col items-center justify-center min-h-screen py-2'
      style={{
        height: null !== (e = s.height) && void 0 !== e ? e : 0,
        width: null !== (t = s.width) && void 0 !== t ? t : 0,
        marginTop: -(null !== (n = s.offsetY) && void 0 !== n ? n : 0),
        marginLeft: -(null !== (o = s.offsetX) && void 0 !== o ? o : 0),
      }}>
      <img
        style={{ width: 400, height: 400 }}
        src='https://images.unsplash.com/photo-1700587085844-b96c27958df2?q=90&w=1880&auto=format'
        alt='image'
      />
    </main>
  )
}
