import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div class="col-md-4 d-flex align-items-center">
                    <Link to="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        <svg class="bi" width="30" height="24"></svg>
                    </Link>
                    <span class="mb-3 mb-md-0 text-body-secondary">© GoFood Company, Inc</span>
                </div>

            </footer>
        </div>
    )
}

export default Footer
