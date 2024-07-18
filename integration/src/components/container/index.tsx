type ContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return (
    <section className="w-[90%] max-w-[1200px] mx-auto flex flex-col">
      {children}
    </section>
  );
};
