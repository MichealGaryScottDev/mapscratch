"use client";
import { useEffect, useMemo, useState, type CSSProperties } from 'react'
import './TextReveal.css'

export type TextRevealMode = 'all' | 'word' | 'line'

type TextRevealProps = {
  children: string
  mode?: TextRevealMode
  duration?: number
  delay?: number
  stagger?: number
  className?: string
  style?: CSSProperties
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  trigger?: number
}

function splitUnits(text: string, mode: TextRevealMode) {
  if (mode === 'line') {
    return text.split('\n')
  }

  if (mode === 'word') {
    return text.split(/(\s+)/).filter((part) => part.length > 0)
  }

  return [text]
}

function RevealUnit({
  content,
  visible,
  duration,
  delay,
}: {
  content: string
  visible: boolean
  duration: number
  delay: number
}) {
  const isWhitespace = /^\s+$/.test(content)

  if (isWhitespace) {
    return <span className="text-reveal__space">{content}</span>
  }

  return (
    <span className="text-reveal__unit">
      <span
        className={`text-reveal__inner${visible ? ' text-reveal__inner--visible' : ''}`}
        style={
          {
            '--reveal-duration': `${duration}s`,
            '--reveal-delay': `${delay}s`,
          } as CSSProperties
        }
      >
        {content}
      </span>
    </span>
  )
}

export function TextReveal({
  children,
  mode = 'all',
  duration = 0.7,
  delay = 0,
  stagger = 0.08,
  className = '',
  style,
  as: Tag = 'p',
  trigger = 0,
}: TextRevealProps) {
  const [visible, setVisible] = useState(false)
  const units = useMemo(() => splitUnits(children, mode), [children, mode])

  useEffect(() => {
    setVisible(false)
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true))
    })
    return () => cancelAnimationFrame(frame)
  }, [trigger, children, mode])

  if (mode === 'all') {
    return (
      <Tag
        className={`text-reveal text-reveal--all ${className}`}
        style={
          {
            '--reveal-duration': `${duration}s`,
            '--reveal-delay': `${delay}s`,
            ...style,
          } as CSSProperties
        }
      >
        <span className={`text-reveal__inner${visible ? ' text-reveal__inner--visible' : ''}`}>
          {children}
        </span>
      </Tag>
    )
  }

  return (
    <Tag className={`text-reveal text-reveal--${mode} ${className}`} style={style}>
      {units.map((unit, index) => (
        <RevealUnit
          key={`${unit}-${index}`}
          content={unit}
          visible={visible}
          duration={duration}
          delay={delay + index * stagger}
        />
      ))}
    </Tag>
  )
}

export default TextReveal
