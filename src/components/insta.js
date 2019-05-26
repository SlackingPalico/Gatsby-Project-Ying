import React from "react"
import Image from "gatsby-image"
import useInstagram from "../hooks/use-instagram"
import "../components/insta.scss"

const Insta = () => {
  const instaPhotos = useInstagram()
  const { username } = instaPhotos[0]

  return (
    <>
      <h2 className="instagram__header">Instagram posts from @{username}</h2>
      <div className="instagram__grid__container">
        {instaPhotos.map(photo => (
          <div
            className="instagram__grid__item instagram__grid__item__shadow-hover"
            key={photo.id}
          >
            <a
              key={photo.id}
              href={`https://instagram.com/p/${photo.id}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="instagram__grid__image"
                fluid={photo.fluid}
                alt={photo.caption}
              />
            </a>
          </div>
        ))}
      </div>
      <a
        className="instagram__link"
        href={`https://instagram.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        See more on instagram &rarr;
      </a>
    </>
  )
}

export default Insta
