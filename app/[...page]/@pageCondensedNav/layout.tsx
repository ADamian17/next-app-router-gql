import MainLayout from '@/layouts/MainLayout';

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { page: string[] }
}) {
  return (
    <MainLayout>
      {children}
    </MainLayout>
  )
}
