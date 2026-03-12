export default function CommonLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            NAVBAR
            {children}
            FOOTER
        </>
    );
}
