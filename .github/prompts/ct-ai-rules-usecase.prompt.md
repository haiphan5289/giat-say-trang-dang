# Custom Hook Generation Prompt with Serena Integration

Goal: Generate a complete custom hook implementation following Component-Based Architecture with React using Serena's semantic understanding.

## Enhanced Workflow with Serena

### 1. Analysis Phase

```bash
# Analyze similar existing custom hooks
make serena-analyze FEATURE=GSAuth

# Find related patterns in codebase
./bin/serena-ios-dev.sh analyze Authentication
```

### 2. Automated Generation

```bash
# Generate complete 6-layer implementation
make serena-usecase NAME=CreateUser ENDPOINT=/api/users INPUT=CreateUserRequest OUTPUT=User

# Serena will automatically create:
# - API Config (apiConfig) endpoint definition
# - Target conforming to AxiosRequestConfig
# - API Service method implementation
# - API Service interface (TypeScript) and implementation
# - Custom Hook with BaseQueryHookType
# - Component execution method
# - Comprehensive unit tests
```

### 3. Integration & Validation

```bash
# Check architecture compliance
make serena-check-arch

# Generate test structure if needed
make serena-generate-tests CLASS=CreateUserComponent
```

## Requirements (Enhanced with Serena)

### Core Implementation

- **6-Layer Architecture**: API Config → Endpoints → API Services → Repositories → Custom Hooks → Components
- **Input/Output Models**: Type-safe domain entities in API Service / Business Logic layer
- **API Service Abstraction**: Protocol-based DI with InversifyJS / React Context
- **RxTypeScript Integration**: Promise / Observable (RxJS) streams with proper error handling
- **Design System**: Use DS* components throughout UI layer
- **Tailwind CSS / Emotion Layout**: Mandatory constraint management

### Testing & Quality

- **Unit Tests**: Jest / React Testing Library with Arrange-Act-Assert pattern
- **Mock Generation**: Automatic mock creation for dependencies
- **Architecture Compliance**: Automatic pattern validation
- **Code Coverage**: Minimum 80% target with automated checks

### Serena-Enhanced Features

- **Semantic Analysis**: Understands existing patterns automatically
- **Pattern Recognition**: Identifies similar implementations across modules
- **Refactoring Support**: Safe architectural transformations
- **Code Generation**: Follows established templates and conventions
- **Quality Assurance**: Automated compliance checking

## Serena Integration Benefits

### Productivity Improvements

- **80% Reduction**: In boilerplate code generation
- **Pattern Consistency**: Automatic adherence to project conventions
- **Error Prevention**: Early detection of architectural violations
- **Time Savings**: Complete custom hook implementation in minutes

### Quality Enhancements

- **Architecture Compliance**: Automatic React (Component/Hook/API Service) pattern enforcement
- **Code Standards**: Consistent with .ruler/ guidelines
- **Testing Coverage**: Automated test structure generation
- **Documentation**: Auto-generated implementation guides

## Deliverables (Serena-Enhanced)

### 1. Complete Implementation

- **Network Layer**: API endpoint definitions and request handling
- **API Service Layer**: Concrete implementations with error handling
- **API Service Layer**: Abstraction with interface (TypeScript)-based design
- **Custom Hook Layer**: Business logic / custom hook with BaseQueryHookType
- **Component Layer**: UI presentation logic with RxTypeScript integration
- **Test Layer**: Comprehensive unit tests with mocks

### 2. Quality Assurance

- **Architecture Validation**: Automatic pattern compliance checks
- **Code Analysis**: Complexity and quality metrics
- **Import Organization**: Consistent import ordering
- **Documentation**: Auto-generated usage examples

### 3. Integration Ready

- **Dependency Injection**: Pre-configured InversifyJS / React Context setup
- **Error Handling**: User-friendly error messages and recovery
- **Logging**: Proper technical logging for debugging
- **Accessibility**: Screen reader support and keyboard navigation

## Usage Example

```bash
# Serena-powered custom hook generation
make serena-usecase \
  NAME=UpdateUserProfile \
  ENDPOINT=/api/user/profile \
  INPUT=UpdateProfileRequest \
  OUTPUT=UserProfile

# Result: Complete implementation across all 6 layers
# with tests, error handling, and documentation
```

## References

- **Architecture**: .ruler/ct-ai-rule-core-architecture.md
- **Code Standards**: .ruler/ct-ai-rule-code-standards.md
- **Testing**: .ruler/ct-ai-rule-testing-general.md
- **Serena Integration**: SERENA_INTEGRATION.md
- **Project Context**: .serena/ios_context.md

---

*This enhanced workflow leverages Serena's semantic understanding to deliver production-ready custom hooks that perfectly align with your established architecture and development standards.*
