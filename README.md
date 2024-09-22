# HONO GENERATOR / HONOOR
# honoor

`honoor` is a CLI tool to set up a Hono.js project with CRUD operations.

## Installation

```bash
npm install honoor
```

## Commands

### `init`

Initializes the folder structure for a Hono.js project.

```bash
honoor init
```

### `create <name>`

Creates a new file. You must specify the type of file to create using one of the options below:

- `-s, --service`: Create a service file
- `-rsc, --resources`: Create service, handler, domain, and repository files
- `-h, --handler`: Create a handler file
- `-d, --domain`: Create a domain file
- `-hl, --helpers`: Create a helpers file
- `-r, --repository`: Create a repository file
- `-l, --lib`: Create a lib file

Example:

```bash
honoor create <name> -s
```

This will create a service file with the specified name.

## Usage

1. **Initialize Project Structure**

    ```bash
    honoor init
    ```

2. **Create a New File**

    ```bash
    honoor create <name> -s
    ```

    Replace `<name>` with the desired file name and use the appropriate option to specify the type of file.

## License

# honoor

`honoor` is a CLI tool to set up a Hono.js project with CRUD operations.

## Installation

```bash
npm install honoor
```

## Commands

### `init`

Initializes the folder structure for a Hono.js project.

```bash
honoor init
```

### `create <name>`

Creates a new file. You must specify the type of file to create using one of the options below:

- `-s, --service`: Create a service file
- `-rsc, --resources`: Create service, handler, domain, and repository files
- `-h, --handler`: Create a handler file
- `-d, --domain`: Create a domain file
- `-hl, --helpers`: Create a helpers file
- `-r, --repository`: Create a repository file
- `-l, --lib`: Create a lib file

Example:

```bash
honoor create <name> -s
```

This will create a service file with the specified name.

## Usage

1. **Initialize Project Structure**

    ```bash
    honoor init
    ```

2. **Create a New File**

    ```bash
    honoor create <name> -s
    ```

    Replace `<name>` with the desired file name and use the appropriate option to specify the type of file.

## License
GPL-3.0