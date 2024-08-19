![https://ui.tekit.dev/](https://ui.tekit.dev/)

# Tekit UI
![alt](https://wakatime.com/badge/user/d2c6ab59-bcd7-432e-bda2-6d2ad77feef1/project/e6382a6b-2d06-4f56-a434-a0268c1ca4ea.svg)

Tekit UI is a React (TypeScript) component library that allows you to quickly and easily add predefined components to your project via the command line.

## Installation

To use Tekit UI, you only need `npx`. There's no need to install the package globally. You can run the command directly from any location in your project.

## Usage

To add a component to your project, use the following command:

```bash
npx tekit-ui add {component}
```

Where `{component}` is the name of the component you want to add. For example, to add the FileTrigger component, you would run:
```bash
npx tekit-ui add FileTrigger
```

This command will download the component from the repository and place it in the src/components/ui/ directory of your project.
Here are some examples of components you can add:

- FileTrigger

> [!NOTE]
> Make sure that the name of the component you are adding matches exactly with the filename in the repository.

### License
This project is licensed under the MIT License.
