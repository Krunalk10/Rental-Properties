import React from 'react'
import properties from '@/properties.json';
import PropertiyCard from '@/components/PropertiyCard';


const PropertiesPage = () => {
  return (
    <section class="px-4 py-6">
      <div class="container-xl lg:container m-auto px-4 py-6">
        { properties.length === 0 ? (
          <p>No Properties Found</p>
        ) : <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertiyCard key={property._id} property={property} />
        ))}
     </div>
     }
        
      </div>
    </section>

  )
}

export default PropertiesPage