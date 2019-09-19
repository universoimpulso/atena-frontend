import React from 'react'
import PropTypes from 'prop-types'
import { StyledRankingRow } from './style'
import avatarSvg from '../../../assets/avatar.svg'

const RankingRow = ({ position, name, avatar, level, score }) => {
  return (
    <StyledRankingRow>
      <div className="ranking">{position}º</div>
      <div className="userInfo">
        {avatar ? (
          <img
            src={avatar || avatarSvg}
            alt={`Foto de ${name}`}
            onError={e => {
              e.target.onerror = null
              e.target.src = avatarSvg
            }}
          />
        ) : (
          <img src={avatarSvg} alt={name} />
        )}
        <p>{name}</p>
      </div>
      <div className="level">{level}</div>
      <div className="xp">{score}</div>
    </StyledRankingRow>
  )
}

RankingRow.propTypes = {
  position: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired
}

export default RankingRow
