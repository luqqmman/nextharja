import AdminSidebar from '@/components/AdminSidebar'
import Provider from '@/components/Provider'

export default function Layout({
    children, // will be a page or nested layout
  }) {
    
    return (
      <Provider>
        <div class="flex">
          <AdminSidebar />
          {children}
        </div>
      </Provider>
    )
  }