import React from 'react'
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, WhatsappShareButton, WhatsappIcon, EmailShareButton, EmailIcon } from 'react-share'


const ShareButtons = ({property}) => {

  const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/properties/${property._id}`
  return (
    <>
       <h3 className="text-xl font-bold text-center pt-2">
        Share this property: 
       </h3>
       <div className="flex gap-3 justify-center pb-5">
        <FacebookShareButton
            url={shareUrl}
            quote={property.name}
            hashtag={`#${property.type.replace(/\s/g, '')}ForRent`}
        >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>

        <TwitterShareButton
            url={shareUrl}
            title={property.name}
            hashtags={[`${property.type.replace(/\s/g, '')}ForRent`]}
        >
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>

        <WhatsappShareButton
            url={shareUrl}
            title={property.name}
            seprator= '::'
        >
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>

        <EmailShareButton
            url={shareUrl}
            title={property.name}
            seprator= '::'
        >
          <EmailIcon size={40} round={true} />
        </EmailShareButton>

       </div>
    </>
  )
}

export default ShareButtons