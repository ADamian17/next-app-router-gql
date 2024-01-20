import ApolloWrapper from '@/components/ApolloWarpper';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ApolloWrapper>
      {children}
    </ApolloWrapper>
  )
}
