// Componente Sidebar

import getAllCaractersIcon from '../services/allCharacters.js'

export async function renderSidebar() {
  
  return (
    `
      <sidebar id="sidebar">
        <div class="container-sidebar" id="container-side-bar">
          <nav class="navigation-sidebar">
            ${await getAllCaractersIcon()}
          </nav>
        </div>
      </sidebar>
    ` 
  )
  
}
