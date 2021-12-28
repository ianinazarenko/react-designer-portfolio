import styled from 'styled-components'
import { useGlobalContext } from '../../context/GlobalContext'
import { Lang } from '../../enums'

export default function LangToggle({ size }: { size: 'small' | 'big' }) {
  const {
    state: { lang },
    changeLang,
  } = useGlobalContext()

  return (
    <Wrapper size={size}>
      <span
        className={lang === 'RUS' ? 'active' : ''}
        onClick={() => changeLang(Lang.RUS)}
      >
        RUS
      </span>
      <span> | </span>
      <span
        className={lang === 'ENG' ? 'active' : ''}
        onClick={() => changeLang(Lang.ENG)}
      >
        ENG
      </span>
    </Wrapper>
  )
}

const Wrapper = styled.div<{ size: string }>`
  display: inline-block;
  position: absolute;
  bottom: ${(p) => (p.size === 'small' ? '0' : '2rem')};
  right: ${(p) => (p.size === 'small' ? '0' : '1.25rem')};
  transform-origin: 100% 0;
  transform: rotate(90deg);
  font-size: ${(p) => (p.size === 'small' ? '1rem' : '2rem')};
  font-weight: 700;
  line-height: 1;

  span {
    color: var(--textColorLight);
    transition: var(--transition);
    &:hover {
      cursor: pointer;
    }
  }

  span.active {
    color: var(--textColor);
  }
`
