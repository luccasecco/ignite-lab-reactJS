import Icon from "./Icon";

export function Footer() {
  return (
    <div className="flex-1">
      <div className="flex items-center justify-between h-8 w-full m-auto py-10 border-t-2 border-gray-600">
        <div className="flex items-center justify-between ml-8">
          <Icon />
          <span className="ml-5 text-xs text-gray-200">Rocketseat - Todos os direitos reservados</span>
        </div>
        <div className="mr-8">
          <span>Políticas de privacidade</span>
        </div>
      </div>


    </div>

  )
}