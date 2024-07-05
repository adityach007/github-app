import React from 'react'
import Repo from "./Repo"

const Repos = ({repos, alwaysFullWidth=false}) => {
  const className = alwaysFullWidth ? 'w-full' : 'lg:w-2/3 w-full'

  return (
    <div className={`${className} bg-glass rounded-lg px-8 py-6`}>
      {repos.length === 0 ? (
        <p>No repositories found.</p>
      ) : (
        <ol className='relative border-s border-gray-200'>
          {repos.map(repo => (
            <Repo key={repo.id} repo={repo} />
          ))}
        </ol>
      )}
    </div>
  )
}

export default Repos